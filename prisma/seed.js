import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.menuItem.createMany({
    data: [
      {
        title: "Mediterranean Vegetable Risotto",
        description:
          "Arborio rice cooked with a blend of locally sourced, seasonal vegetables, and Mediterranean herbs, finished with a drizzle of extra virgin olive oil.",
        image: "mediterranean_vegtable_risotto.jpg",
      },
      {
        title: "Farmhouse Quiche Lorraine",
        description:
          "A savory quiche featuring locally farmed eggs, crisp bacon, Gruyère cheese, and a flaky pastry crust.",
        image: "farmhouse_quiche_lorraine.jpg",
      },
      {
        title: "Farmhouse Ploughman's Board",
        description:
          "A European classic featuring a selection of local cheeses, house-made pickles, cured meats, fresh baguette, and a seasonal chutney.",
        image: "farmhouse_ploughman_board.jpg",
      },
      {
        title: "Prosciutto-Wrapped Asparagus",
        description:
          "Local asparagus spears wrapped in thinly sliced prosciutto, roasted and drizzled with a lemon-herb vinaigrette.",
        image: "prosciutto_wrapped_asparagus.jpg",
      },
      {
        title: "Wild Mushroom and Truffle Risotto",
        description:
          "Creamy risotto made with foraged wild mushrooms, truffle oil, and fresh herbs, served with a sprinkle of Parmesan.",
        image: "wild_mushroom_and_truffle_risotto.jpg",
      },
      {
        title: "Braised Lamb Shank with Polenta",
        description:
          "Slow-braised local lamb shank in a rich red wine reduction, served over creamy Parmesan polenta.",
        image: "braised_lamb_shank_with_polenta.jpg",
      },
      {
        title: "Farm-to-Table Ratatouille",
        description:
          "A rustic Provençal stew of locally grown eggplant, zucchini, tomatoes, and bell peppers, flavored with fresh herbs and served with crusty bread.",
        image: "farm_to_table_ratatouille.jpg",
      },
      {
        title: "Grilled Sea Bass with Saffron Aioli",
        description:
          "Locally sourced sea bass grilled to perfection and served with a saffron-infused aioli, accompanied by a side of seasonal vegetables.",
        image: "grilled_sea_bass_with_saffron_aioli.jpg",
      },
      {
        title: "Bavarian Apple Strudel",
        description:
          "A European-inspired dessert made with local apples, cinnamon, and raisins, wrapped in a flaky pastry, and served warm with a dollop of freshly whipped cream.",
        image: "bavarian_apple_strudel.jpg",
      },
      {
        title: "Roasted Beet and Goat Cheese Salad",
        description:
          "Fresh, locally grown beets roasted to perfection, served with a mix of organic greens, goat cheese, candied walnuts, and a balsamic reduction.",
        image: "roasted_beef_and_goat_cheese_salad.jpg",
      },
    ],
    skipDuplicates: true,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
