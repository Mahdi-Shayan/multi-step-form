function Header({ title, subtitle }) {
   return (
      <>
         <div style={{ marginBottom: "45px" }}>
            <h1
               style={{
                  letterSpacing: "2px",
                  color: "hsl(213, 96%, 18%)",
                  marginBottom: "10px",
               }}
            >
               {title}
            </h1>
            <p
               style={{
                  color: "hsl(231, 11%, 63%)",
                  fontFamily: "regular",
               }}
            >
               {subtitle}
            </p>
         </div>
      </>
   );
}

export default Header;
