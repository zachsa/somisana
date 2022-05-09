import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Cog, Close, ExpandMore, SaveAll } from '../../../../../components/icons'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const SiteSettingsPanel = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* TOGGLE */}
      <Tooltip placement="left" title="Site settings">
        <IconButton
          onClick={() => setOpen(true)}
          size="medium"
          sx={{ position: 'absolute', bottom: 0, right: 0, margin: theme => theme.spacing(2) }}
        >
          <Cog />
        </IconButton>
      </Tooltip>

      {/* DRAWER */}
      <SwipeableDrawer
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            borderBottom: 1,
            padding: theme => theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography>Site settings</Typography>
          <IconButton onClick={() => setOpen(false)} size="small">
            <Close />
          </IconButton>
        </Toolbar>
        <Box
          sx={{
            minWidth: 400,
            margin: theme => theme.spacing(1),
          }}
        >
          <Accordion variant="outlined">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="language-settings-content"
              id="language-settings-header"
            >
              <Typography>Language settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>TODO select language</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion variant="outlined">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="coolie-settings-content"
              id="coolie-settings-header"
            >
              <Typography>Cookie settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>TODO allow cookies</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            borderTop: 1,
            padding: theme => theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            marginTop: 'auto',
          }}
        >
          <Button
            color="inherit"
            onClick={() => setOpen(false)}
            variant="text"
            size="small"
            startIcon={<SaveAll />}
          >
            Save settings
          </Button>
        </Toolbar>
      </SwipeableDrawer>
    </>
  )
}

export default SiteSettingsPanel
