import React from "react"
import { Flex } from 'theme-ui'
import { Statistic, Row, Col, Card } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Proteja seus dados e sua privacidade online!</h1>
    <Flex>
      <Statistic title="Ataques cibernetícos por dia" value={2200} valueStyle={{ color: '#2b4acb' }} />
      <Statistic title="Vazamento de dados em 2021 aumentou em" value={68} valueStyle={{ color: '#2b4acb' }} suffix="%" prefix={<ArrowUpOutlined />}/>
      <Statistic title="Ataques cibernéticos por minuto no Brasil" value={54} valueStyle={{ color: '#2b4acb' }}/>
    </Flex>
    <div>
      {/* Acho que é melhor usar um flex */}
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Como criar e gerenciar suas senhas"
            hoverable
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            Saiba como criar senhas de maneira segura e como gerenciar todas suas senhas.
          </Card>
        </Col>
        <Col span={8}>
          <Card title=" Entenda sobre phishing">
            Entenda sobre phishing
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Cheque se está seguro">
            Cheque se está seguro
          </Card>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default IndexPage
