import React, { useEffect, useState } from "react";
import {
    collection,
    query,
    getDocs,
    orderBy,
    limit,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { StarIcon } from "@heroicons/react/20/solid";
// import { classNames } from "../utils";

const WelcomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const recipesRef = collection(db, "recipes");
                const q = query(recipesRef, orderBy("createdAt", "desc"), limit(10));
                const querySnapshot = await getDocs(q);
                const fetchedRecipes = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRecipes(fetchedRecipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
        return (
            <div className="text-center text-gray-600 py-16">
                <p>Loading recipes...</p>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <main className="pb-24">
                {/* Welcome Message */}
                <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Welcome to the Recipe Sharing Platform
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                        Browse the latest recipes shared by our community.
                    </p>
                </div>

                {/* Recipes Grid */}
                <section
                    aria-labelledby="products-heading"
                    className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
                >
                    <h2 id="products-heading" className="sr-only">
                        Recipes
                    </h2>

                    <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
                            >
                                <img
                                    alt={recipe.imageAlt || "Recipe image"}
                                    src={recipe.image || "https://via.placeholder.com/150"}
                                    className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                                />
                                <div className="pb-4 pt-10 text-center">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={`#`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {recipe.title}
                                        </a>
                                    </h3>
                                    <div className="mt-3 flex flex-col items-center">
                                        <p className="sr-only">
                                            {recipe.rating || 0} out of 5 stars
                                        </p>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        (recipe.rating || 0) > rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-200",
                                                        "size-5 shrink-0"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {recipe.reviewCount || 0} reviews
                                        </p>
                                    </div>
                                    <p className="mt-4 text-base font-medium text-gray-900">
                                        {recipe.price || "Free"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default WelcomePage;