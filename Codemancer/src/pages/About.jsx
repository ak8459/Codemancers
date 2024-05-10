// import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto py-8 px-2">
            <h1 className="text-5xl font-bold text-center mb-4  text-blue-700">About Receptor</h1>
            <div >
                <img src='https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="About Receptor" className="  rounded-xl    w-full h-96 mb-6 object-cover" />
            </div>
            <div className="text-start font-semibold text-lg text-gray-800 w-full mx-auto">
                <p className="mb-2">Welcome to Receptor - your ultimate destination for delicious recipes and healthy diet plans!
                    We are passionate about food and believe that eating healthy should never compromise on taste.</p>
                <p className="mb-2">At Receptor, we curate a wide range of recipes to suit every taste bud and dietary requirement.
                    Whether you're following a vegan, vegetarian, low-sugar, or gluten-free diet, we have something for everyone!</p>
                <p className="mb-2">Our team of experienced chefs and nutritionists work tirelessly to bring you mouthwatering recipes
                    that are not only nutritious but also easy to prepare. We believe that cooking should be enjoyable and accessible to
                    everyone, regardless of their culinary skills.</p>
                <p className="mb-2">Join us on a culinary journey as we explore new flavors, experiment with ingredients, and
                    discover the joy of wholesome eating. Let Receptor be your guide to a healthier, happier lifestyle!. We believe that cooking should be enjoyable and accessible to
                    everyone, regardless of their culinary skills.</p>
            </div>
        </div>
    )
}

export default About