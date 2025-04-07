import { StyleSheet } from "react-native";
import { colors } from "./tokens";

export const styles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    gap: 12,
    padding: 24,
  },
  containerFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.bg,
    paddingVertical: 10,
  },

  //Card

  Card: {
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    borderRadius: 12,
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
  },
  cardImagePlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#444",
    marginRight: 10,
    borderRadius: 4,
  },
  
  // Tipografia e títulos
  logo: {
    color: colors.text,
    fontSize: 96,
    fontFamily: "Aleo",
    fontWeight: "400",
    lineHeight: 96,
    width: 83,
    wordWrap: "break-word",
    paddingTop: 12,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "400",
    fontFamily: "Aleo",
  },
  titleMERS: {
    fontSize: 32,
    color: "white",
    fontWeight: "400",
    fontFamily: "Aleo",
  },
  sectionTitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    fontFamily: "Aleo",
  },

  // Textos secundários
  forgotPassword: {
    color: "#aaa",
    marginBottom: 20,
    alignSelf: "flex-end",
  },
  registerText: {
    color: "#aaa",
    marginTop: 20,
  },
  registerLink: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  feedText: {
    color: "white",
  },
  feedSubtext: {
    color: "gray",
  },
  listText: {
    color: "white",
    fontSize: 12,
  },
  label: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
  seeMore: {
    color: "gray",
    textAlign: "right",
    marginTop: 5,
    paddingBottom: 12,
  },
  seeMoreMERS: {
    color: "gray",
    textAlign: "right",
    marginTop: 5,
  },

  // Inputs e botões
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
    backgroundColor: colors.primary,
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

  // Listas e placeholders
  listPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#2A2A2A",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },


  // Navegação e estrutura
  tab: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },

  center: {
    alignItems: "center",

  },
  // Floating Action Button
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
});
