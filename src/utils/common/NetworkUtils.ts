import { from, map, Observable, of } from "rxjs";
import { Product } from "../../models/product.model";

export class NetworkUtils {
  public static getMatches(): Observable<any> {
    return from(fetch("https://api.example.com/items")).pipe(
      map((res) => res.json())
    );
  }

  public static getMatchById(id: string): Observable<any> {
    return from([]);
  }

  public static getPlayers(): Product[] {
    return [
      {
        id: 1,
        name: "test name",
        price: "test bio",
        details: "",
      },
    ];
  }

  public static getPlayerById(id: string): Product | null {
    return null;
  }
}
