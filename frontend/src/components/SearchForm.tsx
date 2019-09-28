import React, { useState, SyntheticEvent } from 'react'
import { Dropdown, Button, Checkbox } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import { Origin } from '../models/Origin'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faHiking } from '@fortawesome/free-solid-svg-icons'

import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import 'react-datepicker/dist/react-datepicker.css'
import './SearchForm.css'
import { Activity } from '../models/Activity'

const MOCK_ORIGINS: Origin[] = [
  { id: 8503000, name: 'Zürich HB' },
  { id: 8507000, name: 'Bern' },
  { id: 8505000, name: 'Luzern' },
  { id: 8509000, name: 'Chur' },
]

const MOCK_ACTIVITIES: Activity[] = [
  { id: 1, name: 'Hiking', icon: faHiking },
  { id: 2, name: 'Sightseeing', icon: faCity },
  { id: 3, name: 'Shopping', icon: null },
  { id: 4, name: 'Playing', icon: null },
  { id: 5, name: 'Eating', icon: null },
]

const initialState = {
  origins: MOCK_ORIGINS,
  date: new Date(),
  activities: MOCK_ACTIVITIES,
  maxPrice: 50,
  halfFare: true,
}

interface Props {
  searchTrips: (
    originId: number,
    travelDate: string,
    maxPrice: number,
    withHalfFare: boolean,
    categories: string[],
  ) => void
}

export const SearchForm: React.FC<Props> = ({ searchTrips }) => {
  const [selectedOrigin, setSelectedOrigin] = useState<number>()
  const [selectedDate, setSelectedDate] = useState(initialState.date)
  const [selectedActivities, setSelectedActivities] = useState([])
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(
    initialState.maxPrice,
  )
  const [selectedHalfFare, setSelectedHalfFare] = useState(
    initialState.halfFare,
  )

  const originOptions: {
    text: string
    value: string
  }[] = initialState.origins.map(origin => {
    return { text: origin.name, value: origin.id.toString() }
  })

  const activityOptions: {
    text: string
    value: string
  }[] = initialState.activities.map(activity => {
    return { text: activity.name, value: activity.id.toString() }
  })

  const onOriginChange = (event: SyntheticEvent, data: any) => {
    setSelectedOrigin(data.value)
  }

  const onDateChange = (date: Date) => {
    setSelectedDate(date)
  }

  const onActivityChange = (event: SyntheticEvent, data: any) => {
    setSelectedActivities(
      data.value.map((id: number) => {
        const activity = initialState.activities.find(
          activity => activity.id == id,
        )
        return activity ? activity.name.toLowerCase() : ''
      }),
    )
  }

  const onMaxPriceChange = (value: number) => {
    setSelectedMaxPrice(value)
  }

  const onHalfFareChange = (event: SyntheticEvent, data: any) => {
    setSelectedHalfFare(data.checked)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    searchTrips(
      selectedOrigin || 0,
      formatDate(selectedDate),
      selectedMaxPrice,
      selectedHalfFare,
      selectedActivities,
    )
  }

  const formatDate = (date: Date): string => {
    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    )
  }

  const priceSliderMarks = {
    0: '0.-',
    10: '10.-',
    20: '20.-',
    30: '30.-',
    40: '40.-',
    50: '50.-',
    60: '60.-',
    70: '70.-',
    80: '80.-',
    90: '90.-',
    100: '100.-',
  }

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <Dropdown
          placeholder="Where does your trip start?"
          fluid
          selection
          options={originOptions}
          onChange={onOriginChange}
        />

        <br></br>

        <div className="dateWrapper">
          <div className="label">Date:</div>
          <DatePicker
            selected={selectedDate}
            onChange={onDateChange}
            className="ui input"
          />
        </div>

        <br></br>

        <Dropdown
          placeholder="Select your desired activities"
          fluid
          multiple
          selection
          options={activityOptions}
          onChange={onActivityChange}
        />

        <div style={{ margin: '1rem' }}>
          <p>Max. Price</p>
          <Slider
            min={0}
            marks={priceSliderMarks}
            step={10}
            onChange={onMaxPriceChange}
            defaultValue={selectedMaxPrice}
          />
        </div>

        <br></br>

        <Checkbox
          toggle
          label="Half Fare"
          checked={selectedHalfFare}
          onChange={onHalfFareChange}
        />

        <br></br>
        <br></br>

        <Button type="submit" style={{ width: '100%' }}>
          Search
        </Button>
      </form>
    </div>
  )
}
