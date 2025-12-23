import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";

const fetchProducts = async () => {
  const res = await useAxios.get("/products");
  return res.data.data;
};

const ManageProducts = () => {
  const queryClient = useQueryClient();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => useAxios.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product deleted successfully!");
    },
    onError: (err) => {
      toast.error("Failed to delete product.");
      console.error(err);
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse w-full max-w-5xl space-y-4">
          <div className="h-12 bg-gray-200 rounded-lg"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Product Inventory
            </h1>
            <p className="text-gray-500 mt-1">
              Total Products:{" "}
              <span className="font-semibold">{products.length}</span>
            </p>
          </div>
        </header>

        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative mb-4">
                  {product.images?.[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.productName}
                      className="h-40 w-full object-cover border border-gray-100"
                    />
                  ) : (
                    <div className="h-40 w-full rounded-2xl bg-gray-100 border flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No Image</span>
                    </div>
                  )}

                  <span
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full shadow ${
                      product.stock > 10
                        ? "bg-green-100 text-green-800"
                        : product.stock > 0
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {product.category?.categoryName || "Uncategorized"}
                </p>
                <p className="text-xl font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>

              <button
                onClick={() => handleDelete(product.id)}
                disabled={deleteMutation.isPending}
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-sm font-semibold hover:bg-red-700 transition shadow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>

        <div className="md:hidden space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-md p-4 flex flex-col gap-3 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.productName}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.category?.categoryName || "Uncategorized"}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(product.id)}
                  disabled={deleteMutation.isPending}
                  className="bg-red-600 text-white px-3 py-1 rounded-2xl text-sm font-semibold hover:bg-red-700 disabled:opacity-70"
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>
              <div className="flex gap-3 items-center">
                {product.images?.[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.productName}
                    className="h-24 w-24 object-cover rounded-xl border"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-xl bg-gray-100 border flex items-center justify-center">
                    <span className="text-gray-400 text-xs">No Image</span>
                  </div>
                )}

                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full shadow ${
                    product.stock > 10
                      ? "bg-green-100 text-green-800"
                      : product.stock > 0
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <div className="mx-auto h-32 w-32 mb-6 rounded-full bg-gray-200"></div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 text-lg">
              Add new products to get started!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageProducts;
