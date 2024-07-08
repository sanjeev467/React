import Property from "./Property";
import "./PropertyList.css";
export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((p) => {
        {
          return (
            <Property
              key={p.id}
              name={p.name}
              price={p.price}
              rating={p.rating}
            />
          );
        }

        // we can also use spread operator

        {
          /* return <Property {...p} />; */
        }
      })}
    </div>
  );
}
