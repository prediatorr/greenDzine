import { useEffect, useState } from "react";
import "./index.scss";
function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  function searching(e) {
    setSearch(e.target.value.toLowerCase());
  }
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log("heyaa");
      });
  }, []);

  return (
    <div className="list">
      <input type="text" placeholder="Search..." onChange={searching} />
      {data &&
        data.data
          .filter((item) => {
            return item.first_name.toLowerCase().includes(search);
          })
          .map((item, index) => {
            return (
              <div className="item" key={item.id}>
                <div className="item-id">{item.id}</div>
                <div className="box">
                  <div className="images">
                    <img src={item.avatar} alt="" />
                  </div>
                </div>
                <div className="item-name">{item.first_name}</div>
              </div>
            );
          })}
    </div>
  );
}

export default App;
