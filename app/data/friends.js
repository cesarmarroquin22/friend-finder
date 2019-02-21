var friends = [
    {
        "name": "Karl Marx",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg",
        "score": [5,5,5,5,5,5,5,5,5,5]
    },
    {
        "name": "Harry Truman",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/52/Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945-crop.jpg",
        "score": [1,1,1,1,1,1,1,1,1,1]
    },
    {
        "name": "Charlie ",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiKj7uB_8vgAhUIhOAKHTsnCoUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.huffingtonpost.com%2Fentry%2Fsnoot-challenge-dogs-twitter-trend_us_5b7fdaeae4b072951511f7fb&psig=AOvVaw18I4IlNqBEwWJnpvSmQLhp&ust=1550809843988052",
        "scores": [5,5,1,1,4,2,5,5,1,5]
    },
    {
        "name": "Charles Barkly",
        "photo": "data:image/jpeg;base64,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",
        "scores": [1,5,1,3,3,2,2,4,5,4]
    },
    {
        "name": "Charles Barkly",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiq7OyggMzgAhXqYN8KHaz8CU0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F59813501280027232%2F&psig=AOvVaw0dWCJI6KubfZzSZZGHHNjT&ust=1550810178492836",
        "scores": [1,5,1,3,3,5,2,4,5,4]
    },
    {
        "name": "Frank Junior",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiG7r6wgszgAhVMhuAKHWPxBGAQjRx6BAgBEAU&url=https%3A%2F%2Ftwitter.com%2Fdog_feelings&psig=AOvVaw0dWCJI6KubfZzSZZGHHNjT&ust=1550810178492836",
        "scores": [2,2,4,2,3,3,3,3,4,2]
    },
];

module.exports = friends;
    
       