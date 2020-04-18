import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import { useNavigation, useRoute } from "@react-navigation/native"

import styles from "./styles"

import logoImg from "../../assets/logo.png"

function DetailsScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const job = route.params.job

  function handleSendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${job.whatsapp}&text=${"Fale com " + job.name}`)
  }

  function handleSendMail() {
    Linking.openURL(`mailto:${job.email}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} width={20} height={20} />

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
          <Feather name="arrow-left" size={20} color="#1379B9" />
          <Text style={styles.btnBackTxt}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.orgInfo}>
          <Text style={styles.txtBold}>Empresa: </Text>
          {job.name}
        </Text>
        <Text style={styles.orgInfo}>
          <Text style={styles.txtBold}>Cidade: </Text>
          {job.city} - {job.uf}
        </Text>

        <Text style={styles.jobDescription}>{job.description}</Text>

        <Text style={styles.jobWorkload}>
          <Text style={styles.txtBold}>Carga Horária: </Text>
          {job.workload} Horas
        </Text>
        <Text style={styles.jobSalary}>
          <Text style={styles.txtBold}>Salário: </Text>
          {Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(job.salary)}
        </Text>
      </View>

      <View style={styles.contat}>
        <Text style={styles.contatTxt}>Tenha uma boa conversa com a empresa.</Text>
        <Text style={styles.contatTxt}>Contante a empresa usando: </Text>

        <View style={styles.contatBtns}>
          <TouchableOpacity onPress={handleSendWhatsapp} style={styles.contatBtn}>
            <Text style={styles.contatBtnTxt}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSendMail} style={styles.contatBtn}>
            <Text style={styles.contatBtnTxt}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailsScreen