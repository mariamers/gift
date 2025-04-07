import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
  
    container: {
        backgroundColor: "#1B1919",
        flex: 1,
      },
      
      title: {
        fontSize: 32,
        color: "white",
        fontWeight: "400",
        fontFamily: 'Aleo',
  
      },
      section: {
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 18,
        color: "white",
        marginBottom: 10,
        fontFamily: 'Aleo',
  
      },
      
      seeMore: {
        color: "gray",
        textAlign: "right",
        marginTop: 5,
      },
      
      listPlaceholder: {
        width: 80,
        height: 80,
        backgroundColor: "#2A2A2A",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
      },
      listText: {
        color: "white",
        fontSize: 12,
      },
      fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#444",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      },

      feedItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2A2A2A",
        padding: 10,
        borderRadius: 8,
      },
      feedImagePlaceholder: {
        width: 40,
        height: 40,
        backgroundColor: "#444",
        marginRight: 10,
        borderRadius: 4,
      },
      feedText: {
        color: "white",
      },
      seeMoreMERS: {
        color: "gray",
        textAlign: "right",
        marginTop: 5,
      },
      feedSubtext: {
        color: "gray",
      },

      containerFooter: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#131313",
        paddingVertical: 10,
      },
      tab: {
        alignItems: "center",
      },
      label: {
        fontSize: 12,
        color: "#fff",
        marginTop: 4,
      },

      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      },
      titleMERS: {
        fontSize: 32,
        color: "white",
        fontWeight: "400",
        fontFamily: "Aleo",
      },

      input: {
        width: "100%",
        height: 50,
        backgroundColor: "#2A2A2A",
        borderRadius: 8,
        paddingHorizontal: 15,
        color: "#fff",
        marginBottom: 15,
        fontFamily: "Roboto",
      },
      button: {
        width: "100%",
        height: 52,
        backgroundColor: "#D3D3D3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        fontFamily: "Roboto",
    
      },
      buttonText: {
        fontSize: 18,
        color: "#000",
        fontFamily: "Roboto",
    
      },
})

