import { useContext } from 'react'
import { ctx as siteSettingsContext } from '../../../../../../modules/site-settings'
import Accordion from '../../../../../../components/accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMore } from '../../../../../../components/icons'
import { SectionDescription } from '../components'

const ThemeSettings = () => {
  const { updateSetting, ...settings } = useContext(siteSettingsContext)

  return (
    <>
      <Accordion defaultExpanded={settings.accepted === false ? true : undefined}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="theme-settings-content"
          id="theme-settings-header"
        >
          <Typography variant="overline" variantMapping={{ overline: 'h3' }}>
            Theme
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SectionDescription sx={{ marginBottom: 0 }}>
            TODO - toggle between light and dark?
          </SectionDescription>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ThemeSettings
