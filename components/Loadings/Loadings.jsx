import { Circle } from "better-react-spinkit";

const Loadings = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src='http://pngimg.com/uploads/whatsapp/whatsapp_PNG13.png'
          alt='logo'
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color='#3CBC28' size={60} />
      </div>
    </center>
  );
};

export default Loadings;
