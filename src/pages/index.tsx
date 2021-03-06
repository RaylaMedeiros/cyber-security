import React, { ReactNode } from "react"
import { Flex } from "theme-ui"
import { Card } from "antd"
import { ArrowUpOutlined } from "@ant-design/icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Statistic = ({
  title,
  value,
  prefix = <span />,
  suffix = "",
}: {
  title: string
  value: number
  prefix?: ReactNode
  suffix?: string
}) => {
  return (
    <Flex style={{ flexDirection: "column", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>{title}</div>
      <h2 style={{ marginTop: "0.5rem" }}>
        {prefix}
        <span style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}>
          {value}
        </span>
        {suffix}
      </h2>
    </Flex>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h2
        style={{ textAlign: "center", color: "#D6D6D6", marginBottom: "2rem" }}
      >
        Proteja seus dados e sua privacidade online!
      </h2>
      <Flex
        style={{
          justifyContent: "space-between",
          paddingLeft: "6rem",
          paddingRight: "6rem",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Statistic title="Ataques cibernéticos por dia" value={2200} />
        <Statistic
          title="Ataques cibernéticos por minuto no Brasil"
          value={54}
        />
        <Statistic
          title="Vazamento de dados em 2021 aumentou em"
          value={68}
          suffix="%"
          prefix={<ArrowUpOutlined />}
        />
      </Flex>
      <Flex
        style={{
          justifyContent: "space-between",
          marginLeft: "2rem",
          marginRight: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Link to="/posts/senhas" style={{ marginBottom: "1rem" }}>
          <Card
            title="Senhas Seguras"
            headStyle={{ fontSize: 18 }}
            bodyStyle={{ fontSize: 18, margin: 0 }}
            hoverable
            cover={
              <img
                alt="senhas seguras"
                src="https://excellium-services.com/wp-content/uploads/2021/01/Password-hashing.png"
                style={{ margin: 0, width: 550, height: 400 }}
              />
            }
          >
            Saiba como criar senhas seguras e como gerenciar todas suas senhas.
          </Card>
        </Link>
        <Link to="/posts/phishing" style={{ marginBottom: "1rem" }}>
          <Card
            title="Phishing"
            headStyle={{ fontSize: 18 }}
            bodyStyle={{ fontSize: 18, margin: 0 }}
            cover={
              <img
                alt="phishing"
                src="https://static.wixstatic.com/media/e57e4d_908d833b0c1a4c128985912b7f9476ad~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_90,usm_0.66_1.00_0.01/e57e4d_908d833b0c1a4c128985912b7f9476ad~mv2.jpg"
                style={{ margin: 0, width: 550, height: 400 }}
              />
            }
          >
            Entenda como se proteger de ataques de <i>Phishing</i>.
          </Card>
        </Link>
        <Link to="/posts/dataleaks" style={{ marginBottom: "1rem" }}>
          <Card
            title="Cheque se está seguro"
            headStyle={{ fontSize: 18 }}
            bodyStyle={{ fontSize: 18, margin: 0 }}
            cover={
              <img
                alt="vazamento de dados"
                src="https://tm.ibxk.com.br/2020/06/25/25094112402241.jpg?ims=1120x420"
                style={{ margin: 0, width: 550, height: 400 }}
              />
            }
          >
            Aprenda a verificar se seus dados foram vazados.
          </Card>
        </Link>
      </Flex>
    </Layout>
  )
}

export default IndexPage
