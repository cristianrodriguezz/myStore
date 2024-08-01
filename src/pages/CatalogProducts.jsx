import ListCardProducts from "../components/ListCardProducts"


const CatalogProducts = () => {
  return (
    <section className="">
      <span style={{viewTransitionName: `my-store`}} className="text-yellow-200 text-xl">My Store!</span>
      <h1 className="font-bold text-3xl text-center my-5 text-white">Catalog Products</h1>
      <ListCardProducts/>
    </section>
  )
}

export default CatalogProducts