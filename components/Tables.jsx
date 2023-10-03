"use client";

import useDispatch from "@/lib/utils/useDispatch";
import { Fragment, useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const Tables = () => {
  const { state, dispatch } = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const onCategory = (id) => {
    setIsOpen(false);
    const category = state?.data?.find((val) => val.id === id);
    if (category) {
      setProducts(category?.products);
    } else {
      const result = state?.data?.flatMap(({ products }) => products);
      setProducts(result);
    }
  };

  const getItems = async () => {
    try {
      const request = await fetch("/api/items", { cache: "no-cache" });
      const response = await request.json();

      const result = response?.data?.flatMap(({ products }) => products);
      setProducts(result);

      dispatch({
        type: "GET",
        data: response?.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        error: error,
      });
    } finally {
      dispatch({
        type: "FINAL",
      });
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="w-full ">
      <Dropdown
        datas={state}
        onCategory={onCategory}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {state.isLoading ? (
        <div className="text-white font-bold text-4xl">Loaddddd.......</div>
      ) : (
        <div>
          {products.length > 0 ? (
            <div className="overflow-x-scroll md:overflow-hidden w-full h-auto ">
              <table className="border-separate border border-slate-500 table-auto mx-auto">
                <thead>
                  <tr>
                    <th className="border border-slate-600">No</th>
                    <th className="border border-slate-600">Name</th>
                    <th className="border border-slate-600">Description</th>
                    <th className="border border-slate-600">Price</th>
                    <th className="border border-slate-600">Created</th>
                    <th className="border border-slate-600">Modified</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map(
                    (
                      { id, name, price, description, created, modified },
                      idx
                    ) => (
                      <tr key={id}>
                        <td className="border border-slate-700">{idx + 1}</td>
                        <td className="border border-slate-700">{name}</td>
                        <td className="border border-slate-700">
                          {description}
                        </td>
                        <td className="border border-slate-700">{price}</td>
                        <td className="border border-slate-700">{created}</td>
                        <td className="border border-slate-700">{modified}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <Fragment>
              <div>Producst doensnt have</div>
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default Tables;