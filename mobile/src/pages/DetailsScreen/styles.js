import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  // Header
  header: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    height: 70
  },

  btnBack: {
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  btnBackTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1379B9"
  },


  // Job
  jobContainer: {
    marginTop: 25,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#f3f4f5",
    padding: 10,
    borderRadius: 4
  },

  jobTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },

  orgInfo: {
    fontSize: 17,
    color: "#777"
  },

  txtBold: {
    color: "#000",
    fontWeight: "bold"
  },

  jobDescription: {
    marginTop: 15,
    fontSize: 19,
    textAlign: "justify",
    marginBottom: 15
  },

  jobWorkload: {
    fontSize: 16,
    color: "#777"
  },

  jobSalary: {
    fontSize: 16,
    color: "#777"
  },


  // Contat
  contat: {
    marginTop: 25,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#f3f4f5",
    padding: 10,
    borderRadius: 4
  },

  contatTxt: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
    color: "#666"
  },

  contatBtns: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  contatBtn: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1379B9",
    width: "40%",
    height: 40,
    borderRadius: 4
  },

  contatBtnTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
})
