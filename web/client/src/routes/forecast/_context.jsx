import { createContext, useState, useCallback, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Linear as Loading } from '../../components/loading'
import colorFn from './controls/color-bar/config/color'

export const context = createContext({})

export default ({ modelid = undefined, children }) => {
  const id = modelid || new URL(window.location.href).searchParams.get('id')
  const [activeRightPane, setActiveRightPane] = useState(false)
  const [activeRun, setActiveRun] = useState(0)
  const [animateTimeStep, setAnimateTimeStep] = useState(false)
  const [colorScheme, setColorScheme] = useState('Magma')
  const [depth, setDepth] = useState(0)
  const [lockColorBar, setLockColorBar] = useState(false)
  const [reverseColors, setReverseColors] = useState(false)
  const [scaleMax, setScaleMax] = useState(0)
  const [scaleMin, setScaleMin] = useState(0)
  const [selectedCoordinates, setSelectedCoordinates] = useState({})
  const [selectedMPAs, setSelectedMPAs] = useState({})
  const [selectedVariable, setSelectedVariable] = useState('temperature')
  const [showBandData, setShowBandData] = useState(false)
  const [showCoordinates, setShowCoordinates] = useState(true)
  const [showDomain, setShowDomain] = useState(true)
  const [showCurrents, setShowCurrents] = useState(false)
  const [showData, setShowData] = useState(false)
  const [showIsolines, setShowIsolines] = useState(true)
  const [showMPAs, setShowMPAs] = useState(true)
  const [thresholds, setThresholds] = useState(12)
  const [timeStep, setTimeStep] = useState(120)

  // eslint-disable-next-line
  const color = useCallback(
    colorFn({ name: colorScheme, min: scaleMin, max: scaleMax, reverseColors }),
    [scaleMin, scaleMax, colorScheme, reverseColors]
  )

  useEffect(() => {
    setScaleMin(0)
    setScaleMax(0)
  }, [selectedVariable])

  const { loading, error, data } = useQuery(
    gql`
      query models($id: ID) {
        models(id: $id) {
          id
          _id
          title
          description
          max_x
          max_y
          min_x
          min_y
          gridWidth
          gridHeight
          runs {
            id
            run_date
            modelid
            step1_timestamp
            timestep_attrs
            successful
          }
          creator
          creatorContactEmail
        }
      }
    `,
    {
      variables: {
        id,
      },
    }
  )

  if (loading) {
    return <Loading />
  }

  if (error) {
    throw error
  }

  const model = data.models.find(({ _id }) => `${_id}` === `${id}`)
  const runs = [...(model?.runs || [])]
  const run = runs[activeRun]

  return (
    <context.Provider
      value={{
        activeRightPane,
        activeRun,
        animateTimeStep,
        color,
        colorScheme,
        depth,
        lockColorBar,
        model,
        reverseColors,
        run,
        runs,
        scaleMax,
        scaleMin,
        selectedCoordinates,
        selectedMPAs,
        selectedVariable,
        setActiveRightPane,
        setActiveRun,
        setAnimateTimeStep,
        setColorScheme,
        setDepth,
        setLockColorBar,
        setReverseColors,
        setScaleMax,
        setScaleMin,
        setSelectedCoordinates,
        setSelectedMPAs,
        setSelectedVariable,
        setShowBandData,
        setShowCoordinates,
        setShowCurrents,
        setShowData,
        setShowDomain,
        setShowIsolines,
        setShowMPAs,
        setThresholds,
        setTimeStep,
        showBandData,
        showCoordinates,
        showCurrents,
        showData,
        showDomain,
        showIsolines,
        showMPAs,
        thresholds,
        timeStep,
      }}
    >
      {children}
    </context.Provider>
  )
}
