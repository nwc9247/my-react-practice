const AboutPage = () => {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <div>
      <h2>user.name</h2>
      <img
      className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      <p>
        Hello there.
        <br />
        How do you do?{" "}
      </p>
    </div>
  );
};

export default AboutPage;
