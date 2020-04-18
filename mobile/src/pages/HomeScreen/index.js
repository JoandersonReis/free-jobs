import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"

import logoImg from "../../assets/logo.png"
import api from "../../services/api"

function HomeScreen() {
  const [ jobs, setJobs ] = useState([])
  const [ totalCount, setTotalCount ] = useState(0)
  const [page, setPage] = useState(1)
  const [ loading, setLoading ] = useState(false)

  const navigation = useNavigation()

  async function loadJobs() {
    if(loading) {
      return
    }

    if(totalCount > 0 && jobs.length === totalCount) {
      return
    }

    setLoading(true)
    const response = await api.get(`jobs?page=${page}`)

    setJobs([...jobs, ...response.data])
    setTotalCount(response.headers["x-total-count"])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadJobs()
  }, [])

  function renderItem({ item }) {
    return (
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.orgName}>{item.name}</Text>
        <Text style={styles.orgCityUf}>{item.city} - {item.uf}</Text>

        <Text style={styles.jobDescription}>{item.description}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Details", { job: item })} style={styles.btnSeeMore}>
          <Feather name="log-out" size={20} color="#FFF" />
          <Text style={styles.btnSeeMoreTxt}>
            Ver Mais
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} width={20} height={20} />

        <Text style={styles.totalJobs}>Total de <Text style={styles.txtBold}>{totalCount} Casos</Text>.</Text>
      </View>

      <Text style={styles.txtWelcome}>Escolha um Job e junte-se há alguma empresa.</Text>
      <Text style={styles.txtWelcome}>Tenha uma boa conversa com a empresa.</Text>

      <FlatList 
        data = {jobs}
        keyExtractor={job => String(job.id)}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
        onEndReached={loadJobs}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen