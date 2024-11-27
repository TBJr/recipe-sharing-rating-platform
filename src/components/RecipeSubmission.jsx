import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const RecipeSubmission = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [imageURL, setImageURL] = useState(""); // Store OneDrive link here
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !ingredients || !steps || !imageURL) {
            toast.error("Please fill out all fields!");
            return;
        }

        setLoading(true);

        try {
            // Add the recipe to Firestore
            const recipeData = {
                title: title.trim(),
                description: description.trim(),
                ingredients: ingredients.split("\n").filter(Boolean), // Split into array
                steps: steps.split("\n").filter(Boolean), // Split into array
                image: imageURL.trim(), // Use the OneDrive link
                createdAt: serverTimestamp(),
            };

            await addDoc(collection(db, "recipes"), recipeData);

            toast.success("Recipe submitted successfully!");

            // Reset the form
            setTitle("");
            setDescription("");
            setIngredients("");
            setSteps("");
            setImageURL("");
        } catch (error) {
            toast.error("Failed to submit the recipe. Please try again.");
            console.error("Error submitting recipe:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="space-y-10 divide-y divide-gray-900/10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                <div className="px-4 sm:px-0">
                    <h2 className="text-base/7 font-semibold text-gray-900">Submit a Recipe</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">
                        Share your favorite recipes with the community. Upload your image to OneDrive and share the link
                        here.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
                >
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Recipe Title */}
                            <div className="sm:col-span-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-900">
                                    Recipe Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="title"
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                  <textarea
                                      id="description"
                                      rows={3}
                                      value={description}
                                      onChange={(e) => setDescription(e.target.value)}
                                      required
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                  />
                                </div>
                            </div>

                            {/* Ingredients */}
                            <div className="col-span-full">
                                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-900">
                                    Ingredients (one per line)
                                </label>
                                <div className="mt-2">
                                  <textarea
                                      id="ingredients"
                                      rows={5}
                                      value={ingredients}
                                      onChange={(e) => setIngredients(e.target.value)}
                                      required
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                  />
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="col-span-full">
                                <label htmlFor="steps" className="block text-sm font-medium text-gray-900">
                                    Steps (one per line)
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="steps"
                                        rows={5}
                                        value={steps}
                                        onChange={(e) => setSteps(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Image URL */}
                            <div className="col-span-full">
                                <label htmlFor="image-url" className="block text-sm font-medium text-gray-900">
                                    Image URL (OneDrive Link)
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="image-url"
                                        type="url"
                                        value={imageURL}
                                        onChange={(e) => setImageURL(e.target.value)}
                                        required
                                        placeholder="https://onedrive.live.com/..."
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-600">Provide the direct link to your image uploaded
                                    on OneDrive.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button
                            type="button"
                            className="text-sm font-semibold text-gray-900"
                            onClick={() => {
                                setTitle("");
                                setDescription("");
                                setIngredients("");
                                setSteps("");
                                setImageURL("");
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecipeSubmission;