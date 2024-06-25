//practiceQuestion 1 : create a cosnt Object called "Product" to store information Like Name, Price, Offer, starRating.
console.log("practiceQuestion 1 : create a cosnt Object called Product to store information Like Name, Price, Offer, starRating.");
const Product = {
    name: "Pen", 
    price: 5,
    OfferPercent: 5,
    starRating:4
};
console.log("practiceAnswer : Product Details are as under");
console.log("Product Name :", Product.name);
console.log("PPrice :", Product.price);
console.log("offerPercent :", Product.OfferPercent);
console.log("starRating :", Product.starRating);

//practiceQuestion 2 : create a cosnt Object called "socialMedia" to store information Like name, follow, folllowers, following.
console.log("practiceQuestion 1 : create a cosnt Object called socialMedia to store information Like name, follow, folllowers, following.");
const socialMedia = {
    firstName: "Brahmjeet",
    lastName: "Singh",
    follow: false,
    followers: 1776
}
console.log("practiceAnswer: Social Medai Object Details are as under");
let fullName = socialMedia.firstName + socialMedia.lastName;
console.log("Full Name", fullName);
console.log("is he follow anybody:", socialMedia.follow);
console.log("His Followers:", socialMedia.followers);