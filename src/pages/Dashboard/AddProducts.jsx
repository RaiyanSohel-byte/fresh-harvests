import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";

const AddProducts = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [categories, setCategories] = useState([]);
  const [catsLoading, setCatsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const axiosCategory = axios.create({
    baseURL: "/api/v1",
  });

  const selectedCategory = watch("categoryId");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosCategory.get("/category");
        setCategories(res.data?.data || []);
      } catch (err) {
        console.log(err);
        setCategories([]);
      } finally {
        setCatsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      let categoryId = data.categoryId;

      if (newCategoryName.trim()) {
        const res = await axiosCategory.post("/category", {
          categoryName: newCategoryName.trim(),
        });
        categoryId = res.data?.data?.id;
      }

      if (!categoryId) {
        toast.error("Please select an existing category or create a new one.");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        productName: data.productName,
        description: data.description,
        price: Number(data.price),
        stock: Number(data.stock),
        images: data.imageUrl ? [data.imageUrl.trim()] : [],
        categoryId,
      };

      await useAxios.post("/products", payload);

      toast.success("Product added successfully!");
      reset();
      setNewCategoryName("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Add Product</h1>
          <p className="text-sm text-gray-500 mt-1">
            Admin Dashboard · Product Management
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <label className="form-label">Product Name *</label>
                  <input
                    {...register("productName", { required: true })}
                    className="form-input"
                    placeholder="Enter Product Name"
                  />
                </div>

                <div>
                  <label className="form-label">Description *</label>
                  <textarea
                    {...register("description", { required: true })}
                    rows="4"
                    className="form-input resize-none"
                    placeholder="Product Description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Price ($) *</label>
                    <input
                      type="number"
                      {...register("price", { required: true })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Stock *</label>
                    <input
                      type="number"
                      {...register("stock", { required: true })}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="form-label">Image URL</label>
                  <input
                    {...register("imageUrl")}
                    className="form-input"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="form-label">Category</label>
                  <select
                    disabled={catsLoading}
                    {...register("categoryId")}
                    className="form-input"
                  >
                    <option value="">Select category</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="border-t pt-6">
                  <label className="form-label">Create New Category</label>
                  <input
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    disabled={!!selectedCategory}
                    className="form-input disabled:bg-gray-100"
                    placeholder="Create Category"
                  />
                  {selectedCategory && (
                    <p className="text-xs text-gray-400 mt-1">
                      Clear selected category to create a new one
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-3 bg-[#749B3F] text-white text-sm font-medium rounded-md hover:bg-green-800 cursor-pointer transition disabled:opacity-60"
              >
                {isSubmitting ? "Saving..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.25rem;
        }
        .form-input {
          width: 100%;
          padding: 0.6rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          outline: none;
        }
        .form-input:focus {
          border-color: #111827;
        }
      `}</style>
    </section>
  );
};

export default AddProducts;
