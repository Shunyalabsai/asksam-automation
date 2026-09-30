# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: clinical-note.spec.ts >> Create clinical note with document upload & transcription
- Location: tests/clinical-note.spec.ts:5:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /I Understand And Accept/i }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - button "Open user menu" [ref=e11] [cursor=pointer]:
      - img "Anthony Smith's logo" [ref=e14]
  - generic [ref=e17]:
    - generic [ref=e19]:
      - link "Home" [ref=e20] [cursor=pointer]:
        - /url: /clinical/home
        - img [ref=e21]
        - paragraph [ref=e23]: Home
      - link "Patients" [ref=e24] [cursor=pointer]:
        - /url: /clinical/patients
        - img [ref=e25]
        - paragraph [ref=e27]: Patients
      - link "Appointment Dashboard" [ref=e28] [cursor=pointer]:
        - /url: /clinical/expert-dashboard
        - img [ref=e29]
        - paragraph [ref=e31]: Appointment Dashboard
      - link "Help Center" [ref=e32] [cursor=pointer]:
        - /url: /clinical/help-center
        - img [ref=e33]
        - paragraph [ref=e35]: Help Center
      - link "Settings" [ref=e36] [cursor=pointer]:
        - /url: /clinical/settings
        - img [ref=e37]
        - paragraph [ref=e39]: Settings
      - link "Admin" [ref=e40] [cursor=pointer]:
        - /url: /clinical/admin
        - img [ref=e41]
        - paragraph [ref=e46]: Admin
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]:
          - navigation "breadcrumb" [ref=e51]:
            - list [ref=e52]:
              - listitem [ref=e53]:
                - button "Clinical Co-Pilot" [ref=e54]
              - listitem [ref=e55]: /
              - listitem [ref=e56]:
                - paragraph [ref=e57]: Yamini Singh 191
          - generic [ref=e58]:
            - button "Actions" [ref=e59] [cursor=pointer]:
              - text: Actions
              - img [ref=e60]
            - generic [ref=e62]:
              - button "Save" [ref=e63] [cursor=pointer]:
                - img [ref=e64]
                - text: Save
              - button "Submit" [ref=e66] [cursor=pointer]:
                - text: Submit
                - img [ref=e67]
        - generic [ref=e69]:
          - generic [ref=e70]:
            - generic [ref=e73]:
              - generic [ref=e74]:
                - heading "Yamini Singh 191" [level=4] [ref=e75]
                - paragraph [ref=e76]: female
              - generic [ref=e77]:
                - generic [ref=e78]:
                  - img "Calendar" [ref=e79]
                  - paragraph [ref=e80]: 30th September 2026
                - generic [ref=e81]:
                  - img "Email" [ref=e82]
                  - paragraph [ref=e83]: ys191_aus@yopmail.com
            - generic [ref=e85]:
              - heading "Expert Details" [level=6] [ref=e86]
              - paragraph [ref=e87]: Anthony Smith
              - generic [ref=e88]:
                - generic [ref=e89]:
                  - img [ref=e90]
                  - paragraph [ref=e92]: e.cliniciantestuser@asksam.com.au
                - generic [ref=e93]:
                  - img [ref=e94]
                  - paragraph [ref=e96]: "+61413801384"
          - generic [ref=e97]:
            - paragraph [ref=e99]: Summary
            - generic [ref=e100]:
              - generic "rdw-wrapper" [ref=e102]:
                - generic "rdw-toolbar" [ref=e103]:
                  - generic "rdw-inline-control" [ref=e104]:
                    - generic "Bold" [ref=e105] [cursor=pointer]
                    - generic "Italic" [ref=e106] [cursor=pointer]
                    - generic "Underline" [ref=e107] [cursor=pointer]
                    - generic "Strikethrough" [ref=e108] [cursor=pointer]
                    - generic "Monospace" [ref=e109] [cursor=pointer]
                    - generic "Superscript" [ref=e110] [cursor=pointer]
                    - generic "Subscript" [ref=e111] [cursor=pointer]
                  - generic "rdw-list-control" [ref=e112]:
                    - generic "Unordered" [ref=e113] [cursor=pointer]
                    - generic "Ordered" [ref=e114] [cursor=pointer]
                    - generic "Indent" [ref=e115]
                    - generic "Outdent" [ref=e116]
                - textbox "rdw-editor" [ref=e120]:
                  - generic [ref=e121]:
                    - generic [ref=e124]: "Session note summary: REASON FOR VISIT Patient is currently in her third week of hospitalisation in a psychiatric unit due to severe depression, and is being treated for chronic back pain, ankle pain, anxiety, and insomnia symptoms. CLINICAL History/ HPI Patient sustained an injury that required surgery to manage gastrocnemius tendon pain. She has experienced suboptimal therapeutic effect or intolerable side effects from various treatments and medications, including analgesia and anti-inflammatory medications. She has developed refractory symptoms of chronic back pain, anxiety, and insomnia. She has a history of severe depression, manic episodes, and suicide attempts. SUBJECTIVE Patient reports:"
                    - list [ref=e125]:
                      - listitem [ref=e126]:
                        - generic [ref=e128]: Chronic back pain
                      - listitem [ref=e129]:
                        - generic [ref=e131]: Ankle pain
                      - listitem [ref=e132]:
                        - generic [ref=e134]: Anxiety
                      - listitem [ref=e135]:
                        - generic [ref=e137]: Insomnia symptoms
                      - listitem [ref=e138]:
                        - generic [ref=e140]: Depression
                    - generic [ref=e143]: "Objective:"
                    - list [ref=e144]:
                      - listitem [ref=e145]:
                        - generic [ref=e147]: "Vitals:"
                      - listitem [ref=e148]:
                        - generic [ref=e150]: "21-07-2026 - Blood pressure: 130/85 mmHg (Slightly elevated)"
                      - listitem [ref=e151]:
                        - generic [ref=e153]: "21-07-2026 - Pulse: 78 beats per minute (Normal)"
                      - listitem [ref=e154]:
                        - generic [ref=e156]: "21-07-2026 - Respiratory rate: 16 breaths per minute (Normal)"
                      - listitem [ref=e157]:
                        - generic [ref=e159]: "21-07-2026 - Oxygen saturation: 98% on room air (Normal)"
                      - listitem [ref=e160]:
                        - generic [ref=e162]: "Mental Status Exam Results:"
                      - listitem [ref=e163]:
                        - generic [ref=e165]: "Appearance: Well-groomed but appearing fatigued"
                      - listitem [ref=e166]:
                        - generic [ref=e168]: "Behaviour: Cooperative but exhibits psychomotor retardation"
                      - listitem [ref=e169]:
                        - generic [ref=e171]: "Speech: Slow and soft"
                      - listitem [ref=e172]:
                        - generic [ref=e174]: "Mood: Depressed"
                      - listitem [ref=e175]:
                        - generic [ref=e177]: "Affect: Constricted"
                      - listitem [ref=e178]:
                        - generic [ref=e180]: "Thought Process: Logical but slowed"
                      - listitem [ref=e181]:
                        - generic [ref=e183]: "Thought Content: Expresses feelings of hopelessness and worthlessness, denies current suicidal ideation"
                      - listitem [ref=e184]:
                        - generic [ref=e186]: "Cognition: Intact orientation to time, place, and person; attention and concentration mildly impaired"
                      - listitem [ref=e187]:
                        - generic [ref=e189]: "Insight and Judgment: Good insight into her condition, judgment intact but affected by mood"
                    - generic [ref=e192]: "Vitals:"
                    - list [ref=e193]:
                      - listitem [ref=e194]:
                        - generic [ref=e196]: "21-07-2026 - Blood pressure: 130/85 mmHg (Slightly elevated)"
                      - listitem [ref=e197]:
                        - generic [ref=e199]: "21-07-2026 - Pulse: 78 beats per minute (Normal)"
                      - listitem [ref=e200]:
                        - generic [ref=e202]: "21-07-2026 - Respiratory rate: 16 breaths per minute (Normal)"
                      - listitem [ref=e203]:
                        - generic [ref=e205]: "21-07-2026 - Oxygen saturation: 98% on room air (Normal)"
                    - generic [ref=e208]: "Examination:"
                    - list [ref=e209]:
                      - listitem [ref=e210]:
                        - generic [ref=e212]: "Physical Exam Results:"
                      - listitem [ref=e213]:
                        - generic [ref=e215]: No information available regarding height.
                      - listitem [ref=e216]:
                        - generic [ref=e218]: No information available regarding weight.
                      - listitem [ref=e219]:
                        - generic [ref=e221]: No information available regarding vision.
                      - listitem [ref=e222]:
                        - generic [ref=e224]: No information available regarding hearing.
                      - listitem [ref=e225]:
                        - generic [ref=e227]: No information available regarding muscle health.
                      - listitem [ref=e228]:
                        - generic [ref=e230]: No information available regarding bone health.
                    - generic [ref=e233]: "RESULTS REVIEWED Pathology:"
                    - list [ref=e234]:
                      - listitem [ref=e235]:
                        - generic [ref=e237]: "Biochemical Diagnostics:"
                      - listitem [ref=e238]:
                        - generic [ref=e240]: "22-07-2026 - Complete Blood Count (CBC): Within normal limits"
                      - listitem [ref=e241]:
                        - generic [ref=e243]: "22-07-2026 - Liver Function Tests (LFTs): Slightly elevated ALT"
                      - listitem [ref=e244]:
                        - generic [ref=e246]: "22-07-2026 - Electrolytes: Within normal limits"
                      - listitem [ref=e247]:
                        - generic [ref=e249]: "22-07-2026 - Lipid Profile: Slightly elevated LDL cholesterol"
                      - listitem [ref=e250]:
                        - generic [ref=e252]: "Imaging And Radiological Diagnostics:"
                      - listitem [ref=e253]:
                        - generic [ref=e255]: 2026 - Slightly elevated ALT
                      - listitem [ref=e256]:
                        - generic [ref=e258]: 2026 - Slightly elevated LDL cholesterol
                      - listitem [ref=e259]:
                        - generic [ref=e261]: 2026 - Normal renal function
                      - listitem [ref=e262]:
                        - generic [ref=e264]: 2026 - Normal thyroid function tests
                      - listitem [ref=e265]:
                        - generic [ref=e267]: 2026 - Normal electrolytes
                      - listitem [ref=e268]:
                        - generic [ref=e270]: 2026 - Normal respiratory rate
                    - generic [ref=e273]: "Imaging:"
                    - list [ref=e274]:
                      - listitem [ref=e275]:
                        - generic [ref=e277]: No relevant imaging results available.
                    - generic [ref=e280]: ASSESSMENT Patient is currently being treated for severe depression, chronic back pain, ankle pain, anxiety, and insomnia symptoms. She has a history of suboptimal therapeutic effect or intolerable side effects from various treatments and medications. PLAN
                    - list [ref=e281]:
                      - listitem [ref=e282]:
                        - generic [ref=e284]: Continue treatment for severe depression, chronic back pain, ankle pain, anxiety, and insomnia symptoms.
                      - listitem [ref=e285]:
                        - generic [ref=e287]: Continue Medicinal Cannabis treatment plan.
                      - listitem [ref=e288]:
                        - generic [ref=e290]: Practice Mindfulness-Based Stress Reduction (MBSR) techniques.
                      - listitem [ref=e291]:
                        - generic [ref=e293]: Develop healthier coping strategies to manage stress and emotional triggers.
                      - listitem [ref=e294]:
                        - generic [ref=e296]: Reading, playing guitar, and hiking as part of a balanced lifestyle.
                      - listitem [ref=e297]:
                        - generic [ref=e299]: Develop a structured plan for reintegration into daily life and work.
                      - listitem [ref=e300]:
                        - generic [ref=e302]: Practice MBSR, occupational therapy.
                      - listitem [ref=e303]:
                        - generic [ref=e305]: Intensive Cognitive Behavioural Therapy (CBT)
                      - listitem [ref=e306]:
                        - generic [ref=e308]: Dialectical Behaviour Therapy (DBT)
                      - listitem [ref=e309]:
                        - generic [ref=e311]: Individual Psychotherapy
                      - listitem [ref=e312]:
                        - generic [ref=e314]: Group Therapy
                      - listitem [ref=e315]:
                        - generic [ref=e317]: Grief Counseling
                      - listitem [ref=e318]:
                        - generic [ref=e320]: Mindfulness-Based Stress Reduction (MBSR)
                      - listitem [ref=e321]:
                        - generic [ref=e323]: Occupational Therapy
                    - generic [ref=e326]: TASKS
                    - list [ref=e327]:
                      - listitem [ref=e328]:
                        - generic [ref=e330]: Practice Mindfulness-Based Stress Reduction (MBSR) techniques.
                      - listitem [ref=e331]:
                        - generic [ref=e333]: Develop healthier coping strategies to manage stress and emotional triggers.
                      - listitem [ref=e334]:
                        - generic [ref=e336]: Reading, playing guitar, and hiking as part of a balanced lifestyle.
                      - listitem [ref=e337]:
                        - generic [ref=e339]: Develop a structured plan for reintegration into daily life and work.
                      - listitem [ref=e340]:
                        - generic [ref=e342]: Practice MBSR, occupational therapy.
                      - listitem [ref=e343]:
                        - generic [ref=e345]: Intensive Cognitive Behavioural Therapy (CBT)
                      - listitem [ref=e346]:
                        - generic [ref=e348]: Dialectical Behaviour Therapy (DBT)
                      - listitem [ref=e349]:
                        - generic [ref=e351]: Individual Psychotherapy
                      - listitem [ref=e352]:
                        - generic [ref=e354]: Group Therapy
                      - listitem [ref=e355]:
                        - generic [ref=e357]: Grief Counseling
                      - listitem [ref=e358]:
                        - generic [ref=e360]: Mindfulness-Based Stress Reduction (MBSR)
                      - listitem [ref=e361]:
                        - generic [ref=e363]: Occupational Therapy
              - group "Basic button group" [ref=e365]:
                - button "Like" [ref=e366] [cursor=pointer]:
                  - img [ref=e367]
                - button "Dislike" [ref=e369] [cursor=pointer]:
                  - img [ref=e370]
                - button "Regenerate" [ref=e372] [cursor=pointer]:
                  - img [ref=e373]
                - button "Clear" [ref=e375] [cursor=pointer]:
                  - img [ref=e376]
          - generic [ref=e379]:
            - img [ref=e382] [cursor=pointer]
            - img [ref=e384] [cursor=pointer]
          - generic [ref=e391]:
            - generic [ref=e393]:
              - generic:
                - img
              - tablist [ref=e396]:
                - tab "Clinical Advice" [selected] [ref=e397] [cursor=pointer]: Clinical Advice
                - tab "Clinical Examination" [ref=e398] [cursor=pointer]: Clinical Examination
                - tab "Follow-Up Note" [ref=e399] [cursor=pointer]: Follow-Up Note
                - tab "Case History" [ref=e400] [cursor=pointer]: Case History
              - generic:
                - img
            - tabpanel [ref=e402]:
              - generic [ref=e404]:
                - generic [ref=e406]:
                  - generic [ref=e408]:
                    - generic [ref=e409]:
                      - generic [ref=e410]:
                        - heading "Chief Complaint (CC)" [level=6] [ref=e411]
                        - img [ref=e412]
                      - generic "rdw-wrapper" [ref=e416]:
                        - generic "rdw-toolbar" [ref=e417]:
                          - generic "rdw-inline-control" [ref=e418]:
                            - generic "Bold" [ref=e419] [cursor=pointer]
                            - generic "Italic" [ref=e420] [cursor=pointer]
                            - generic "Underline" [ref=e421] [cursor=pointer]
                            - generic "Strikethrough" [ref=e422] [cursor=pointer]
                            - generic "Monospace" [ref=e423] [cursor=pointer]
                            - generic "Superscript" [ref=e424] [cursor=pointer]
                            - generic "Subscript" [ref=e425] [cursor=pointer]
                          - generic "rdw-list-control" [ref=e426]:
                            - generic "Unordered" [ref=e427] [cursor=pointer]
                            - generic "Ordered" [ref=e428] [cursor=pointer]
                            - generic "Indent" [ref=e429]
                            - generic "Outdent" [ref=e430]
                        - textbox "rdw-editor" [ref=e434]
                    - group "Basic button group" [ref=e440]:
                      - button "Like" [ref=e441] [cursor=pointer]:
                        - img [ref=e442]
                      - button "Dislike" [ref=e444] [cursor=pointer]:
                        - img [ref=e445]
                      - button "Regenerate" [ref=e447] [cursor=pointer]:
                        - img [ref=e448]
                      - button "Clear" [ref=e450] [cursor=pointer]:
                        - img [ref=e451]
                  - generic [ref=e453]:
                    - generic [ref=e455]:
                      - generic [ref=e456]:
                        - generic [ref=e457]:
                          - heading "History of Present Illness (HPI)" [level=6] [ref=e458]
                          - img [ref=e459]
                        - generic "rdw-wrapper" [ref=e463]:
                          - generic "rdw-toolbar" [ref=e464]:
                            - generic "rdw-inline-control" [ref=e465]:
                              - generic "Bold" [ref=e466] [cursor=pointer]
                              - generic "Italic" [ref=e467] [cursor=pointer]
                              - generic "Underline" [ref=e468] [cursor=pointer]
                              - generic "Strikethrough" [ref=e469] [cursor=pointer]
                              - generic "Monospace" [ref=e470] [cursor=pointer]
                              - generic "Superscript" [ref=e471] [cursor=pointer]
                              - generic "Subscript" [ref=e472] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e473]:
                              - generic "Unordered" [ref=e474] [cursor=pointer]
                              - generic "Ordered" [ref=e475] [cursor=pointer]
                              - generic "Indent" [ref=e476]
                              - generic "Outdent" [ref=e477]
                          - textbox "rdw-editor" [ref=e481]
                      - group "Basic button group" [ref=e487]:
                        - button "Like" [ref=e488] [cursor=pointer]:
                          - img [ref=e489]
                        - button "Dislike" [ref=e491] [cursor=pointer]:
                          - img [ref=e492]
                        - button "Regenerate" [ref=e494] [cursor=pointer]:
                          - img [ref=e495]
                        - button "Clear" [ref=e497] [cursor=pointer]:
                          - img [ref=e498]
                    - generic [ref=e501]:
                      - generic [ref=e502]:
                        - generic [ref=e503]:
                          - heading "Session Summary" [level=6] [ref=e504]
                          - img [ref=e505]
                        - generic "rdw-wrapper" [ref=e509]:
                          - generic "rdw-toolbar" [ref=e510]:
                            - generic "rdw-inline-control" [ref=e511]:
                              - generic "Bold" [ref=e512] [cursor=pointer]
                              - generic "Italic" [ref=e513] [cursor=pointer]
                              - generic "Underline" [ref=e514] [cursor=pointer]
                              - generic "Strikethrough" [ref=e515] [cursor=pointer]
                              - generic "Monospace" [ref=e516] [cursor=pointer]
                              - generic "Superscript" [ref=e517] [cursor=pointer]
                              - generic "Subscript" [ref=e518] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e519]:
                              - generic "Unordered" [ref=e520] [cursor=pointer]
                              - generic "Ordered" [ref=e521] [cursor=pointer]
                              - generic "Indent" [ref=e522]
                              - generic "Outdent" [ref=e523]
                          - textbox "rdw-editor" [ref=e527]
                      - group "Basic button group" [ref=e533]:
                        - button "Like" [ref=e534] [cursor=pointer]:
                          - img [ref=e535]
                        - button "Dislike" [ref=e537] [cursor=pointer]:
                          - img [ref=e538]
                        - button "Regenerate" [ref=e540] [cursor=pointer]:
                          - img [ref=e541]
                        - button "Clear" [ref=e543] [cursor=pointer]:
                          - img [ref=e544]
                  - generic [ref=e546]:
                    - generic [ref=e548]:
                      - generic [ref=e549]:
                        - generic [ref=e550]:
                          - heading "Advice" [level=6] [ref=e551]
                          - img [ref=e552]
                        - generic "rdw-wrapper" [ref=e556]:
                          - generic "rdw-toolbar" [ref=e557]:
                            - generic "rdw-inline-control" [ref=e558]:
                              - generic "Bold" [ref=e559] [cursor=pointer]
                              - generic "Italic" [ref=e560] [cursor=pointer]
                              - generic "Underline" [ref=e561] [cursor=pointer]
                              - generic "Strikethrough" [ref=e562] [cursor=pointer]
                              - generic "Monospace" [ref=e563] [cursor=pointer]
                              - generic "Superscript" [ref=e564] [cursor=pointer]
                              - generic "Subscript" [ref=e565] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e566]:
                              - generic "Unordered" [ref=e567] [cursor=pointer]
                              - generic "Ordered" [ref=e568] [cursor=pointer]
                              - generic "Indent" [ref=e569]
                              - generic "Outdent" [ref=e570]
                          - textbox "rdw-editor" [ref=e574]
                      - group "Basic button group" [ref=e580]:
                        - button "Like" [ref=e581] [cursor=pointer]:
                          - img [ref=e582]
                        - button "Dislike" [ref=e584] [cursor=pointer]:
                          - img [ref=e585]
                        - button "Regenerate" [ref=e587] [cursor=pointer]:
                          - img [ref=e588]
                        - button "Clear" [ref=e590] [cursor=pointer]:
                          - img [ref=e591]
                    - generic [ref=e594]:
                      - generic [ref=e595]:
                        - generic [ref=e596]:
                          - heading "Future Treatment Plan" [level=6] [ref=e597]
                          - img [ref=e598]
                        - generic "rdw-wrapper" [ref=e602]:
                          - generic "rdw-toolbar" [ref=e603]:
                            - generic "rdw-inline-control" [ref=e604]:
                              - generic "Bold" [ref=e605] [cursor=pointer]
                              - generic "Italic" [ref=e606] [cursor=pointer]
                              - generic "Underline" [ref=e607] [cursor=pointer]
                              - generic "Strikethrough" [ref=e608] [cursor=pointer]
                              - generic "Monospace" [ref=e609] [cursor=pointer]
                              - generic "Superscript" [ref=e610] [cursor=pointer]
                              - generic "Subscript" [ref=e611] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e612]:
                              - generic "Unordered" [ref=e613] [cursor=pointer]
                              - generic "Ordered" [ref=e614] [cursor=pointer]
                              - generic "Indent" [ref=e615]
                              - generic "Outdent" [ref=e616]
                          - textbox "rdw-editor" [ref=e620]
                      - group "Basic button group" [ref=e626]:
                        - button "Like" [ref=e627] [cursor=pointer]:
                          - img [ref=e628]
                        - button "Dislike" [ref=e630] [cursor=pointer]:
                          - img [ref=e631]
                        - button "Regenerate" [ref=e633] [cursor=pointer]:
                          - img [ref=e634]
                        - button "Clear" [ref=e636] [cursor=pointer]:
                          - img [ref=e637]
                  - generic [ref=e639]:
                    - generic [ref=e640]:
                      - heading "Medications to be Prescribed" [level=6] [ref=e641]
                      - img [ref=e642]
                    - button "Add New Medicine" [ref=e646] [cursor=pointer]:
                      - img [ref=e648]
                      - text: Add New Medicine
                  - generic [ref=e650]:
                    - generic [ref=e652]:
                      - heading "Lab Test" [level=6] [ref=e653]
                      - img [ref=e654]
                    - button "Add Lab Test" [ref=e658] [cursor=pointer]:
                      - img [ref=e660]
                      - text: Add Lab Test
                - generic [ref=e662]:
                  - generic [ref=e664]:
                    - generic [ref=e665]:
                      - generic [ref=e666]:
                        - heading "Recommend Expert" [level=6] [ref=e667]
                        - img [ref=e668]
                      - button "History" [ref=e671] [cursor=pointer]:
                        - img [ref=e673]
                        - text: History
                    - generic [ref=e675]:
                      - generic [ref=e676]:
                        - generic: Type of expert
                        - generic [ref=e677]:
                          - combobox "Type of expert" [ref=e678] [cursor=pointer]
                          - textbox
                          - img
                          - group:
                            - generic: Type of expert
                      - generic [ref=e679]:
                        - button "Add" [disabled]:
                          - generic:
                            - img
                          - text: Add
                  - generic [ref=e681]:
                    - generic [ref=e682]:
                      - generic [ref=e683]:
                        - heading "Recommend Program" [level=6] [ref=e684]
                        - img [ref=e685]
                      - button "History" [ref=e688] [cursor=pointer]:
                        - img [ref=e690]
                        - text: History
                    - generic [ref=e692]:
                      - generic [ref=e693]:
                        - generic: Type of Program
                        - generic [ref=e694]:
                          - combobox "Type of Program" [ref=e695] [cursor=pointer]
                          - textbox
                          - img
                          - group:
                            - generic: Type of Program
                      - generic [ref=e697]:
                        - button "Add" [disabled]:
                          - generic:
                            - img
                          - text: Add
                  - generic [ref=e698]:
                    - generic [ref=e699]:
                      - generic [ref=e700]:
                        - heading "Recommend Assessment" [level=6] [ref=e701]
                        - img [ref=e702]
                      - button "History" [ref=e705] [cursor=pointer]:
                        - img [ref=e707]
                        - text: History
                    - button "Add" [ref=e711] [cursor=pointer]:
                      - img [ref=e713]
                      - text: Add
                  - generic [ref=e715]:
                    - generic [ref=e716]:
                      - generic [ref=e717]:
                        - heading "Recommend Content" [level=6] [ref=e718]
                        - img [ref=e719]
                      - button "History" [ref=e722] [cursor=pointer]:
                        - img [ref=e724]
                        - text: History
                    - generic [ref=e726]:
                      - generic [ref=e727]:
                        - generic: Type of Content
                        - generic [ref=e728]:
                          - combobox "Type of Content" [ref=e729] [cursor=pointer]
                          - textbox
                          - img
                          - group:
                            - generic: Type of Content
                      - generic [ref=e730]:
                        - button "Add" [disabled]:
                          - generic:
                            - img
                          - text: Add
      - contentinfo [ref=e732]:
        - paragraph [ref=e734]: asksam does not provide medical advice, diagnosis, or treatment recommendations. Output must be reviewed by a qualified clinician. asksam is not designed to replace clinical reasoning or provide medical decision guidance.
```

# Test source

```ts
  97  |   }
  98  | 
  99  |   /* ===========================
  100 |      OPEN VOICE MODAL (from note page)
  101 |   ============================ */
  102 |   async openVoiceModal() {
  103 |     // Check if the Voice modal is already open (it auto-opens on new note creation)
  104 |     const modalTitle = this.page.getByText('Voice and Document Transcriptions').first();
  105 |     if (await modalTitle.isVisible({ timeout: 3000 }).catch(() => false)) {
  106 |       console.log('✅ Voice modal already open');
  107 |       return;
  108 |     }
  109 | 
  110 |     // Click the headset/mic icon on the right side of the note page
  111 |     const headsetIcon = this.page.locator('svg[data-testid="HeadsetMicOutlinedIcon"]').first();
  112 |     await headsetIcon.waitFor({ state: 'visible', timeout: 15000 });
  113 |     await headsetIcon.click({ force: true });
  114 |     console.log('✅ Clicked headset mic icon');
  115 | 
  116 |     await modalTitle.waitFor({ state: 'visible', timeout: 15000 });
  117 |     console.log('✅ Voice and Document Transcriptions modal opened');
  118 |   }
  119 | 
  120 |   /* ===========================
  121 |      VOICE RECORD + TRANSCRIBE
  122 |   ============================ */
  123 |   async voiceRecordAndSend() {
  124 |     // 1. Click mic button to start recording
  125 |     const micIcon = this.page.locator('svg[data-testid="MicIcon"]').first();
  126 |     await micIcon.waitFor({ state: 'visible', timeout: 10000 });
  127 |     await micIcon.click({ force: true });
  128 |     console.log('✅ Clicked mic — recording started');
  129 | 
  130 |     // 2. Wait for Stop button to appear (confirms recording is active)
  131 |     const stopBtn = this.page.getByRole('button', { name: 'Stop' });
  132 |     await stopBtn.waitFor({ state: 'visible', timeout: 10000 });
  133 |     console.log('✅ Stop button visible — recording in progress');
  134 | 
  135 |     // 3. Simulate speaking — wait a few seconds
  136 |     await this.page.waitForTimeout(5000);
  137 | 
  138 |     // 4. Click Stop to finish recording
  139 |     await stopBtn.click();
  140 |     console.log('✅ Clicked Stop — recording ended');
  141 | 
  142 |     // 5. Wait for transcription to appear in the text area
  143 |     await this.page.waitForTimeout(5000);
  144 | 
  145 |     // 6. Click Send Transcription
  146 |     const sendBtn = this.page.getByRole('button', { name: 'Send Transcription' });
  147 |     await sendBtn.waitFor({ state: 'visible', timeout: 30000 });
  148 |     await this.page.waitForFunction(
  149 |       () => !document.querySelector('#notetaker_send_transcription')?.disabled,
  150 |       { timeout: 30000 }
  151 |     ).catch(() => {});
  152 |     await sendBtn.click();
  153 |     console.log('✅ Clicked Send Transcription');
  154 |   }
  155 | 
  156 |   /* ===========================
  157 |      TRANSCRIPTION (document upload flow)
  158 |   ============================ */
  159 |   async transcribeAndSend() {
  160 |     await this.page
  161 |       .getByRole('button', { name: 'Transcribe All' })
  162 |       .waitFor({ state: 'visible', timeout: 20000 });
  163 | 
  164 |     await this.page.getByRole('button', { name: 'Transcribe All' }).click();
  165 | 
  166 |     // Wait for transcription to complete — CI can be slow
  167 |     await this.page
  168 |       .getByRole('button', { name: 'Send Transcription' })
  169 |       .waitFor({ state: 'visible', timeout: 120000 });
  170 | 
  171 |     const sendBtn = this.page.getByRole('button', { name: 'Send Transcription' });
  172 |     await sendBtn.waitFor({ state: 'visible', timeout: 10000 });
  173 |     // Wait for button to be enabled (not disabled)
  174 |     await this.page.waitForFunction(
  175 |       () => !document.querySelector('#notetaker_send_transcription')?.disabled,
  176 |       { timeout: 30000 }
  177 |     ).catch(() => {});
  178 |     await sendBtn.click();
  179 |   }
  180 | 
  181 | /* ===========================
  182 |    DISCLAIMERS
  183 | ============================ */
  184 | async acceptDisclaimers() {
  185 |   const disclaimerBtn = this.page.getByRole('button', {
  186 |     name: /I Understand And Accept/i
  187 |   });
  188 | 
  189 |   // First disclaimer
  190 |   await disclaimerBtn.waitFor({ state: 'visible', timeout: 30000 });
  191 |   await disclaimerBtn.click();
  192 | 
  193 |   // Small wait for next modal transition
  194 |   await this.page.waitForTimeout(2000);
  195 | 
  196 |   // Second disclaimer
> 197 |   await disclaimerBtn.waitFor({ state: 'visible', timeout: 30000 });
      |                       ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  198 |   await disclaimerBtn.click();
  199 | 
  200 |   // Ensure modal is gone before Save
  201 |   await disclaimerBtn.first().waitFor({ state: 'detached', timeout: 30000 });
  202 | }
  203 | 
  204 |   /* ===========================
  205 |      VERIFY CLINICAL TABS HAVE DATA
  206 |      Each tab waits up to 90s for data — fails if data doesn't arrive
  207 |   ============================ */
  208 |   async verifyClinicalTabsHaveData() {
  209 |     const tabs = ['Clinical Advice', 'Clinical Examination', 'Follow-Up Note', 'Case History'];
  210 |     const perTabWait = 90000; // 90 seconds per tab
  211 |     const failedTabs = [];
  212 | 
  213 |     for (const tabName of tabs) {
  214 |       const tab = this.page.getByRole('tab', { name: tabName });
  215 |       if (!(await tab.isVisible().catch(() => false))) {
  216 |         console.log(`⚠ ${tabName} tab not found — skipping`);
  217 |         continue;
  218 |       }
  219 | 
  220 |       await tab.click();
  221 |       await this.page.waitForTimeout(1500);
  222 | 
  223 |       // Wait up to 90s for this tab to have meaningful content
  224 |       const startTime = Date.now();
  225 |       let fieldCount = 0;
  226 |       while (Date.now() - startTime < perTabWait) {
  227 |         const editables = await this.page.locator('[contenteditable="true"]').allTextContents();
  228 |         const meaningful = editables.filter(t => {
  229 |           const trimmed = t.trim();
  230 |           return trimmed.length > 5 && !trimmed.includes('No information');
  231 |         });
  232 |         if (meaningful.length > 0) {
  233 |           fieldCount = meaningful.length;
  234 |           break;
  235 |         }
  236 |         await this.page.waitForTimeout(3000);
  237 |       }
  238 | 
  239 |       if (fieldCount > 0) {
  240 |         console.log(`✅ ${tabName}: ${fieldCount} fields with data`);
  241 |       } else {
  242 |         console.log(`❌ ${tabName}: NO DATA after 90s`);
  243 |         failedTabs.push(tabName);
  244 |       }
  245 |     }
  246 | 
  247 |     if (failedTabs.length > 0) {
  248 |       throw new Error(
  249 |         `Clinical note tabs have no data after 90s wait: ${failedTabs.join(', ')} — transcription incomplete`
  250 |       );
  251 |     }
  252 | 
  253 |     // Go back to Clinical Advice tab
  254 |     const firstTab = this.page.getByRole('tab', { name: 'Clinical Advice' });
  255 |     if (await firstTab.isVisible().catch(() => false)) {
  256 |       await firstTab.click();
  257 |       await this.page.waitForTimeout(1000);
  258 |     }
  259 |   }
  260 | 
  261 |   /* ===========================
  262 |      SAVE & SUBMIT
  263 |   ============================ */
  264 |   async saveAndSubmit() {
  265 |     await this.page.getByRole('button', { name: 'Save' }).click();
  266 |     await this.page.waitForTimeout(3000);
  267 | 
  268 |     await this.page.getByRole('button', { name: 'Submit' }).click();
  269 |     await this.page.waitForTimeout(3000);
  270 | 
  271 |     await this.page.getByRole('button', { name: 'Submit' }).click();
  272 |     await this.page.waitForTimeout(3000);
  273 | 
  274 |   }
  275 | 
  276 |   /* ===========================
  277 |      LOGOUT
  278 |   ============================ */
  279 |   async logout() {
  280 |     await this.page.getByRole('button', { name: 'Open user menu' }).click();
  281 |     await this.page.getByRole('menuitem', { name: 'Sign out' }).click();
  282 |   }
  283 | }
```