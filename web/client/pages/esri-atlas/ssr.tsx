/**
 * This page doesn't support SSR
 */
import { useState, useEffect, lazy, Suspense, useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { ctx as configContext } from '../../modules/config'
import { createPortal } from 'react-dom'
import Box from '@mui/material/Box'
import { Linear as Loading } from '../../components/loading'

const Map = lazy(() => import('./map'))

export default () => {
  const { id } = useParams()
  const [isClient, setIsClient] = useState(false)
  const { IMPORT_MAP } = useContext(configContext)

  useEffect(() => {
    setIsClient(true)
  }, [])

  /**
   * ESRI CSS is named to minor arcgis.js
   * version. But this approach may be too
   * brittle - perhaps better to reference
   * CSS version explicitly
   */
  const arcGisVersion = useMemo(
    () =>
      IMPORT_MAP?.scopes['../']['@arcgis/core/Map']
        .match(/\@arcgis\/core@(.*)\/Map.js/)[1]
        .match(/[^\.]*\.[^\.]*/)[0],
    []
  )

  if (!isClient) {
    return null
  }

  return (
    <>
      {/* Render the stylesheet into the head */}
      {createPortal(
        <link
          rel="stylesheet"
          href={`https://js.arcgis.com/${arcGisVersion}/esri/themes/light/main.css`}
        />,
        document.getElementsByTagName('head')[0]
      )}
      <Suspense fallback={<Loading />}>
        <Box
          sx={{
            flexGrow: 1,
            background: theme => theme.palette.grey[100],
            transition: theme => theme.transitions.create(['background-color']),
          }}
        >
          <Map id={id} />
        </Box>
      </Suspense>
    </>
  )
}
