import Header from "./Header"
import CardPizza from "./CardPizza"
import { pizzas } from "../pizzas"

const Home = () => {
  return (
    <main>
      <Header />

      <div className="container my-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
