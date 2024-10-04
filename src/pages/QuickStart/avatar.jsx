const user = {
  name: "no game no life",
  imageUrl:
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1410247217i/21801491.jpg",
  imageSize: 300,
};

export default function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
} 
