import { from, map, Observable, of } from "rxjs";
import { Product } from "../../models/product.model";

export class NetworkUtils {
  // this is dummy data for testing only
  static productList: Product[] = [
    {
      id: 1,
      name: "test name 1",
      price: "100",
      details: "details 1",
    },
    {
      id: 2,
      name: "test name 2",
      price: "200",
      details: "details 2",
    },
    {
      id: 3,
      name: "test name 3",
      price: "300",
      details: "details 3",
    },
  ];

  public static getMatches(): Observable<any> {
    return from(fetch("https://api.example.com/items")).pipe(
      map((res) => res.json())
    );
  }

  public static getMatchById(id: string): Observable<any> {
    return from([]);
  }

  public static getPlayers(): Product[] {
    return this.productList;
  }

  public static getPlayerById(id: number): Product | undefined {
    return this.productList.find((prod) => {
      return prod.id === id;
    });
  }
}
