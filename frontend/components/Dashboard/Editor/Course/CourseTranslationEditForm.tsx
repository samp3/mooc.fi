import React, { useState } from "react"
import { Button, Grid, MenuItem, Typography, Paper } from "@material-ui/core"
import { Field, FieldArray, getIn, FormikErrors } from "formik"
import { TextField } from "formik-material-ui"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { CourseTranslationFormValues } from "./types"
import ConfirmationDialog from "../../ConfirmationDialog"
import { languages, initialTranslation } from "./form-validation"
import styled from "styled-components"

const useStyles = makeStyles(() =>
  createStyles({
    languageEntry: {
      spacing: "10px",
      lineHeight: "2",
      padding: "0 0 20px 0",
    },
    paper: {
      borderLeft: "2px solid #A0A0FF",
      padding: "20px",
    },
  }),
)

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
`

const CourseTranslationEditForm = ({
  values,
  errors,
  isSubmitting,
}: {
  values: CourseTranslationFormValues[]
  errors: (FormikErrors<CourseTranslationFormValues> | undefined)[] | undefined
  isSubmitting: boolean
}) => {
  const classes = useStyles()
  const [removeDialogVisible, setRemoveDialogVisible] = useState(false)
  const [removableIndex, setRemovableIndex] = useState(-1)

  return (
    <section>
      <Grid container direction="column">
        <FieldArray
          name="course_translations"
          render={helpers => (
            <>
              <ConfirmationDialog
                title="Are you sure?"
                content="Do you want to remove this translation?"
                acceptText="Yes"
                rejectText="No"
                onAccept={() => {
                  setRemoveDialogVisible(false)
                  removableIndex >= 0 && helpers.remove(removableIndex)
                  setRemovableIndex(-1)
                }}
                onReject={() => {
                  setRemoveDialogVisible(false)
                  setRemovableIndex(-1)
                }}
                show={removeDialogVisible}
              />
              {values.length ? (
                values.map(
                  //@ts-ignore
                  (value: CourseTranslationFormValues, index: number) => (
                    <Grid
                      item
                      className={classes.languageEntry}
                      key={`translation-${index}`}
                    >
                      <Paper className={classes.paper} elevation={2}>
                        <Field
                          name={`course_translations[${index}].language`}
                          type="select"
                          label="Language"
                          errors={[getIn(errors, `[${index}].language`)]}
                          fullWidth
                          variant="outlined"
                          select
                          autoComplete="off"
                          component={StyledTextField}
                        >
                          {languages.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                        <Field
                          name={`course_translations[${index}].name`}
                          type="text"
                          label="Name"
                          error={getIn(errors, `[${index}].name`)}
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          component={StyledTextField}
                        />
                        <Field
                          name={`course_translations[${index}].description`}
                          type="textarea"
                          label="Description"
                          error={getIn(errors, `[${index}].description`)}
                          fullWidth
                          multiline
                          rows={5}
                          autoComplete="off"
                          variant="outlined"
                          component={StyledTextField}
                        />
                        <Field
                          name={`course_translations[${index}].link`}
                          type="text"
                          label="Link"
                          error={getIn(errors, `[${index}].link`)}
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          component={StyledTextField}
                        />
                        <Field
                          name={`course_translations[${index}].open_university_course_code`}
                          type="text"
                          label="Open university course code"
                          error={getIn(
                            errors,
                            `[${index}].open_university_course_code`,
                          )}
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          component={StyledTextField}
                        />
                        <br />
                        <Grid container justify="flex-end">
                          <Button
                            variant="contained"
                            disabled={isSubmitting}
                            color="secondary"
                            onClick={() => {
                              setRemoveDialogVisible(true)
                              setRemovableIndex(index)
                            }}
                          >
                            Remove translation
                          </Button>
                        </Grid>
                      </Paper>
                    </Grid>
                  ),
                )
              ) : (
                <Paper className={classes.paper} elevation={2}>
                  <Typography variant="body1">
                    Please add at least one translation!
                  </Typography>
                </Paper>
              )}
              {values && values.length < languages.length && (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  onClick={() => helpers.push({ ...initialTranslation })}
                >
                  Add translation
                </Button>
              )}
            </>
          )}
        />
      </Grid>
    </section>
  )
}

export default CourseTranslationEditForm