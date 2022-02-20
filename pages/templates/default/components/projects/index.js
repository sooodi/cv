import { Icon, Card, Label, List, Image, Popup } from 'semantic-ui-react'
import styles from './style.module.css'
export default (projects) => {
  const items = Array.isArray(projects) && projects.map((val, index) => {
    const cardItem = () => {
      return (
        <Card key={index} fluid className={styles.projectCards}>
          <Image src={val.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{val.name}</Card.Header>
            <Card.Meta>{val.type}</Card.Meta>
            <Card.Description>
              <p>{val.description}</p>
              <List bulleted>
                {val.highlights.map((highlight, i) => <List.Item key={i}>{highlight}</List.Item>)}
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='key' /> {val.keywords.map((keyword, i) => <Label key={i} style={{ marginBottom: 5 }}>{keyword}</Label>)}
          </Card.Content>
        </Card>)
    }

    const duration = () => {
      return (
        <>
          <p>
            <b>From:</b> {val.startDate || 'N/A'} <br />
            <b>To:</b> {val.endDate || 'N/A'}
          </p>
        </>)
    }

    return (
      <Popup
        content={duration()}
        key={index + '100'}
        header={val.name}
        trigger={cardItem()}
        position='right center'
      />
    )
  })
  return (items)
}
