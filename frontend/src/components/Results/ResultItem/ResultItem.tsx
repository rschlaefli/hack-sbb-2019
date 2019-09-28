import React from 'react'
import { Grid, Segment, Item } from 'semantic-ui-react'
import cssClasses from './ResultItem.module.css'

interface Props {
  id: number
  from: string
  to: string
  date: string
  price: number
  category: string
  discount: number
  vehicles: string[]
}

export const ResultItem: React.FC<Props> = ({
  from,
  to,
  date,
  price,
  category,
  discount,
  vehicles,
}) => {
  return (
    <div className={cssClasses.Wrapper}>
      <div
        className={`${cssClasses.ParentContainer} ${cssClasses.ResultItemContainer}`}
      >
        <div className={cssClasses.Column}>
          <div className={cssClasses.Row}>
            <div className={cssClasses.ColumnOneFourfth}>Icon</div>
            <div className={cssClasses.ColumnOneFourfth}>Train</div>
            <div className={cssClasses.ColumnOneFourfth}>Ship</div>
            <div className={cssClasses.ColumnOneFourfth}>Bus</div>
          </div>
          <div className={`${cssClasses.Row}`}>Time</div>
          <div className={`${cssClasses.Row}`}>arrow to</div>
          <div className={cssClasses.Row}>Date</div>
        </div>
        <div className={cssClasses.Column}>
          <div className={cssClasses.Row}>empty</div>
          <div className={`${cssClasses.Row}`}>Time</div>
          <div className={`${cssClasses.Row}`}>arrow back</div>
          <div className={cssClasses.Row}>empty</div>
        </div>
        <div className={cssClasses.LastColumn}>
          <div className={cssClasses.Row}>1</div>
          <div className={cssClasses.Row}>2</div>
        </div>
      </div>
    </div>

    // <Item style={{ border: '1px solid black' }}>
    //   <Grid>
    //     <Grid.Row columns={3}>
    //       <Grid.Column>
    //         <Grid.Row>Logos</Grid.Row>
    //         <Grid.Row>Start Time</Grid.Row>
    //         <Grid.Row>Date</Grid.Row>
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Grid.Row textAlign={"center"}>
    //           <Grid.Column><div className={'result-item__block'}>1</div></Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row>
    //           <Grid.Column textAlign={"center"}>center</Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row textAlign={"center"}>
    //           <Grid.Column><div className={'result-item__block'}>3</div></Grid.Column>
    //         </Grid.Row>
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Grid.Row>discount</Grid.Row>
    //         <Grid.Row>price</Grid.Row>
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Item>
  )
}
