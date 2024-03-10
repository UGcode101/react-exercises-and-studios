export default function BookList() {

   let pageTitle = "Books I like";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/a/a7/God_Emperor_of_Dune-Frank_Herbert_%281981%29_First_edition.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/8/82/Chapterhouse_Dune-Frank_Herbert_%281985%29_First_edition.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Dune" style={{ maxWidth: "100px", marginRight: "10px" }} />
         <img src={book2} alt="God Emperor of Dune" style={{ maxWidth: "100px", marginRight: "10px" }} />
         <img src={book3} alt="Chapterhouse: Dune" style={{ maxWidth: "100px" }} />
      </div>      
   );
}

