import { View, Text } from 'react-native'
import React from 'react'
import CalendarHeatmap from 'react-native-calendar-heatmap';


const App = () => {
  return (
    <View>
      <CalendarHeatmap
        colorArray={["#D44B79", "#6B1928", "#9F3251", "#360000"]}
        endDate={new Date('2016-01-01')}
        numDays={365}
        values={[
          { date: '2016-01-01' },
          { date: '2016-01-22' },
          { date: '2016-01-30' },
          // ...and so on
        ]}
      />
    </View>
  )
}

export default App