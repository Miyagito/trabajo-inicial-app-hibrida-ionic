// Importa los componentes necesarios de Ionic
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
// Importa los estilos específicos del componente
import "./Home.css";

// Función del componente Home
function Home() {
  // Retorno del componente JSX
  return (
    // Fragmento para agrupar varios elementos
    <>
      {/* Encabezado de la página */}
      <IonHeader>
        {/* Barra de herramientas con color primario */}
        <IonToolbar color="primary">
          {/* Título del álbum en la barra de herramientas */}
          <IonTitle>Album example</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Contenido principal de la página */}
      <IonContent>
        {/* Introducción del álbum con título y párrafo descriptivo */}
        <div className="album-intro">
          <h2>
            Something short and leading about the collection below—its contents,
            the creator, etc.
          </h2>
          <p>
            Make it short and sweet, but not too short so folks don't simply
            skip over it entirely.
          </p>
          {/* Botones de acción */}
          <IonButton expand="block">Main call to action</IonButton>
          <IonButton expand="block" fill="outline" className="ion-margin-top">
            Secondary action
          </IonButton>
        </div>
        {/* Grid para organizar las tarjetas del álbum */}
        <IonGrid className="home-grid">
          <IonRow>
            {/* Mapeo de elementos a tarjetas */}
            {Array.from({ length: 3 }, (_, i) => (
              <IonCol
                key={i}
                sizeXs="12"
                sizeSm="6"
                sizeMd="6"
                sizeLg="4"
                sizeXl="4"
              >
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Thumbnail</IonCardSubtitle>
                    <IonCardTitle>Card Title {i + 1}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    <div className="ion-padding-top">
                      <IonButton fill="clear">View</IonButton>
                      <IonButton fill="clear">Edit</IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
}

// Exporta el componente Home para su uso en otros componentes
export default Home;
