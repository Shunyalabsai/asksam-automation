# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-patient-clinical-note.spec.ts >> CCOP | Create new patient & clinical note (dynamic) >> Create patient + upload + submit
- Location: tests/create-patient-clinical-note.spec.ts:5:7

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 180000ms exceeded.
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
                - paragraph [ref=e57]: Test user-540774
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
                - heading "Test user-540774" [level=4] [ref=e75]
                - paragraph [ref=e76]: Female
              - generic [ref=e77]:
                - generic [ref=e78]:
                  - img "Calendar" [ref=e79]
                  - paragraph [ref=e80]: 30th September 2026
                - generic [ref=e81]:
                  - img "Email" [ref=e82]
                  - paragraph [ref=e83]: testuser-540774@tmail.com
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
          - generic [ref=e98]:
            - paragraph [ref=e99]: Summary
            - button "Generate" [ref=e100] [cursor=pointer]:
              - img [ref=e101]
              - text: Generate
          - generic [ref=e104]:
            - img [ref=e107] [cursor=pointer]
            - img [ref=e110] [cursor=pointer]
          - generic [ref=e117]:
            - generic [ref=e119]:
              - generic:
                - img
              - tablist [ref=e122]:
                - tab "Clinical Advice" [ref=e123] [cursor=pointer]: Clinical Advice
                - tab "Clinical Examination" [active] [selected] [ref=e124] [cursor=pointer]: Clinical Examination
                - tab "Follow-Up Note" [ref=e125] [cursor=pointer]: Follow-Up Note
                - tab "Case History" [ref=e126] [cursor=pointer]: Case History
              - generic:
                - img
            - tabpanel [ref=e128]:
              - generic [ref=e131]:
                - button "History" [ref=e135] [cursor=pointer]:
                  - img [ref=e137]
                  - text: History
                - generic [ref=e139]:
                  - generic [ref=e140]:
                    - generic [ref=e141]:
                      - generic [ref=e142]:
                        - generic [ref=e143]:
                          - heading "Vitals" [level=6] [ref=e144]
                          - img [ref=e145]
                        - generic "rdw-wrapper" [ref=e149]:
                          - generic "rdw-toolbar" [ref=e150]:
                            - generic "rdw-inline-control" [ref=e151]:
                              - generic "Bold" [ref=e152] [cursor=pointer]
                              - generic "Italic" [ref=e153] [cursor=pointer]
                              - generic "Underline" [ref=e154] [cursor=pointer]
                              - generic "Strikethrough" [ref=e155] [cursor=pointer]
                              - generic "Monospace" [ref=e156] [cursor=pointer]
                              - generic "Superscript" [ref=e157] [cursor=pointer]
                              - generic "Subscript" [ref=e158] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e159]:
                              - generic "Unordered" [ref=e160] [cursor=pointer]
                              - generic "Ordered" [ref=e161] [cursor=pointer]
                              - generic "Indent" [ref=e162]
                              - generic "Outdent" [ref=e163]
                          - textbox "rdw-editor" [ref=e167]
                      - group "Basic button group" [ref=e173]:
                        - button "Like" [ref=e174] [cursor=pointer]:
                          - img [ref=e175]
                        - button "Dislike" [ref=e177] [cursor=pointer]:
                          - img [ref=e178]
                        - button "Regenerate" [ref=e180] [cursor=pointer]:
                          - img [ref=e181]
                        - button "Clear" [ref=e183] [cursor=pointer]:
                          - img [ref=e184]
                    - generic [ref=e186]:
                      - generic [ref=e187]:
                        - generic [ref=e188]:
                          - heading "Mental Status Exam Results" [level=6] [ref=e189]
                          - img [ref=e190]
                        - generic "rdw-wrapper" [ref=e194]:
                          - generic "rdw-toolbar" [ref=e195]:
                            - generic "rdw-inline-control" [ref=e196]:
                              - generic "Bold" [ref=e197] [cursor=pointer]
                              - generic "Italic" [ref=e198] [cursor=pointer]
                              - generic "Underline" [ref=e199] [cursor=pointer]
                              - generic "Strikethrough" [ref=e200] [cursor=pointer]
                              - generic "Monospace" [ref=e201] [cursor=pointer]
                              - generic "Superscript" [ref=e202] [cursor=pointer]
                              - generic "Subscript" [ref=e203] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e204]:
                              - generic "Unordered" [ref=e205] [cursor=pointer]
                              - generic "Ordered" [ref=e206] [cursor=pointer]
                              - generic "Indent" [ref=e207]
                              - generic "Outdent" [ref=e208]
                          - textbox "rdw-editor" [ref=e212]
                      - group "Basic button group" [ref=e218]:
                        - button "Like" [ref=e219] [cursor=pointer]:
                          - img [ref=e220]
                        - button "Dislike" [ref=e222] [cursor=pointer]:
                          - img [ref=e223]
                        - button "Regenerate" [ref=e225] [cursor=pointer]:
                          - img [ref=e226]
                        - button "Clear" [ref=e228] [cursor=pointer]:
                          - img [ref=e229]
                  - generic [ref=e231]:
                    - generic [ref=e232]:
                      - generic [ref=e233]:
                        - generic [ref=e234]:
                          - heading "Physical Exam Results" [level=6] [ref=e235]
                          - img [ref=e236]
                        - generic "rdw-wrapper" [ref=e240]:
                          - generic "rdw-toolbar" [ref=e241]:
                            - generic "rdw-inline-control" [ref=e242]:
                              - generic "Bold" [ref=e243] [cursor=pointer]
                              - generic "Italic" [ref=e244] [cursor=pointer]
                              - generic "Underline" [ref=e245] [cursor=pointer]
                              - generic "Strikethrough" [ref=e246] [cursor=pointer]
                              - generic "Monospace" [ref=e247] [cursor=pointer]
                              - generic "Superscript" [ref=e248] [cursor=pointer]
                              - generic "Subscript" [ref=e249] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e250]:
                              - generic "Unordered" [ref=e251] [cursor=pointer]
                              - generic "Ordered" [ref=e252] [cursor=pointer]
                              - generic "Indent" [ref=e253]
                              - generic "Outdent" [ref=e254]
                          - textbox "rdw-editor" [ref=e258]
                      - group "Basic button group" [ref=e264]:
                        - button "Like" [ref=e265] [cursor=pointer]:
                          - img [ref=e266]
                        - button "Dislike" [ref=e268] [cursor=pointer]:
                          - img [ref=e269]
                        - button "Regenerate" [ref=e271] [cursor=pointer]:
                          - img [ref=e272]
                        - button "Clear" [ref=e274] [cursor=pointer]:
                          - img [ref=e275]
                    - generic [ref=e277]:
                      - generic [ref=e278]:
                        - generic [ref=e279]:
                          - heading "Histopathological/Pathological Diagnostics" [level=6] [ref=e280]
                          - img [ref=e281]
                        - generic "rdw-wrapper" [ref=e285]:
                          - generic "rdw-toolbar" [ref=e286]:
                            - generic "rdw-inline-control" [ref=e287]:
                              - generic "Bold" [ref=e288] [cursor=pointer]
                              - generic "Italic" [ref=e289] [cursor=pointer]
                              - generic "Underline" [ref=e290] [cursor=pointer]
                              - generic "Strikethrough" [ref=e291] [cursor=pointer]
                              - generic "Monospace" [ref=e292] [cursor=pointer]
                              - generic "Superscript" [ref=e293] [cursor=pointer]
                              - generic "Subscript" [ref=e294] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e295]:
                              - generic "Unordered" [ref=e296] [cursor=pointer]
                              - generic "Ordered" [ref=e297] [cursor=pointer]
                              - generic "Indent" [ref=e298]
                              - generic "Outdent" [ref=e299]
                          - textbox "rdw-editor" [ref=e303]
                      - group "Basic button group" [ref=e309]:
                        - button "Like" [ref=e310] [cursor=pointer]:
                          - img [ref=e311]
                        - button "Dislike" [ref=e313] [cursor=pointer]:
                          - img [ref=e314]
                        - button "Regenerate" [ref=e316] [cursor=pointer]:
                          - img [ref=e317]
                        - button "Clear" [ref=e319] [cursor=pointer]:
                          - img [ref=e320]
                  - generic [ref=e322]:
                    - generic [ref=e323]:
                      - generic [ref=e324]:
                        - generic [ref=e325]:
                          - heading "Imaging and Radiological Diagnostics" [level=6] [ref=e326]
                          - img [ref=e327]
                        - generic "rdw-wrapper" [ref=e331]:
                          - generic "rdw-toolbar" [ref=e332]:
                            - generic "rdw-inline-control" [ref=e333]:
                              - generic "Bold" [ref=e334] [cursor=pointer]
                              - generic "Italic" [ref=e335] [cursor=pointer]
                              - generic "Underline" [ref=e336] [cursor=pointer]
                              - generic "Strikethrough" [ref=e337] [cursor=pointer]
                              - generic "Monospace" [ref=e338] [cursor=pointer]
                              - generic "Superscript" [ref=e339] [cursor=pointer]
                              - generic "Subscript" [ref=e340] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e341]:
                              - generic "Unordered" [ref=e342] [cursor=pointer]
                              - generic "Ordered" [ref=e343] [cursor=pointer]
                              - generic "Indent" [ref=e344]
                              - generic "Outdent" [ref=e345]
                          - textbox "rdw-editor" [ref=e349]
                      - group "Basic button group" [ref=e355]:
                        - button "Like" [ref=e356] [cursor=pointer]:
                          - img [ref=e357]
                        - button "Dislike" [ref=e359] [cursor=pointer]:
                          - img [ref=e360]
                        - button "Regenerate" [ref=e362] [cursor=pointer]:
                          - img [ref=e363]
                        - button "Clear" [ref=e365] [cursor=pointer]:
                          - img [ref=e366]
                    - generic [ref=e368]:
                      - generic [ref=e369]:
                        - generic [ref=e370]:
                          - heading "Biochemical Diagnostics" [level=6] [ref=e371]
                          - img [ref=e372]
                        - generic "rdw-wrapper" [ref=e376]:
                          - generic "rdw-toolbar" [ref=e377]:
                            - generic "rdw-inline-control" [ref=e378]:
                              - generic "Bold" [ref=e379] [cursor=pointer]
                              - generic "Italic" [ref=e380] [cursor=pointer]
                              - generic "Underline" [ref=e381] [cursor=pointer]
                              - generic "Strikethrough" [ref=e382] [cursor=pointer]
                              - generic "Monospace" [ref=e383] [cursor=pointer]
                              - generic "Superscript" [ref=e384] [cursor=pointer]
                              - generic "Subscript" [ref=e385] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e386]:
                              - generic "Unordered" [ref=e387] [cursor=pointer]
                              - generic "Ordered" [ref=e388] [cursor=pointer]
                              - generic "Indent" [ref=e389]
                              - generic "Outdent" [ref=e390]
                          - textbox "rdw-editor" [ref=e394]
                      - group "Basic button group" [ref=e400]:
                        - button "Like" [ref=e401] [cursor=pointer]:
                          - img [ref=e402]
                        - button "Dislike" [ref=e404] [cursor=pointer]:
                          - img [ref=e405]
                        - button "Regenerate" [ref=e407] [cursor=pointer]:
                          - img [ref=e408]
                        - button "Clear" [ref=e410] [cursor=pointer]:
                          - img [ref=e411]
                  - generic [ref=e413]:
                    - generic [ref=e414]:
                      - generic [ref=e415]:
                        - generic [ref=e416]:
                          - heading "Microbiological Diagnostics" [level=6] [ref=e417]
                          - img [ref=e418]
                        - generic "rdw-wrapper" [ref=e422]:
                          - generic "rdw-toolbar" [ref=e423]:
                            - generic "rdw-inline-control" [ref=e424]:
                              - generic "Bold" [ref=e425] [cursor=pointer]
                              - generic "Italic" [ref=e426] [cursor=pointer]
                              - generic "Underline" [ref=e427] [cursor=pointer]
                              - generic "Strikethrough" [ref=e428] [cursor=pointer]
                              - generic "Monospace" [ref=e429] [cursor=pointer]
                              - generic "Superscript" [ref=e430] [cursor=pointer]
                              - generic "Subscript" [ref=e431] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e432]:
                              - generic "Unordered" [ref=e433] [cursor=pointer]
                              - generic "Ordered" [ref=e434] [cursor=pointer]
                              - generic "Indent" [ref=e435]
                              - generic "Outdent" [ref=e436]
                          - textbox "rdw-editor" [ref=e440]
                      - group "Basic button group" [ref=e446]:
                        - button "Like" [ref=e447] [cursor=pointer]:
                          - img [ref=e448]
                        - button "Dislike" [ref=e450] [cursor=pointer]:
                          - img [ref=e451]
                        - button "Regenerate" [ref=e453] [cursor=pointer]:
                          - img [ref=e454]
                        - button "Clear" [ref=e456] [cursor=pointer]:
                          - img [ref=e457]
                    - generic [ref=e459]:
                      - generic [ref=e460]:
                        - generic [ref=e461]:
                          - heading "Cardiological Diagnostics" [level=6] [ref=e462]
                          - img [ref=e463]
                        - generic "rdw-wrapper" [ref=e467]:
                          - generic "rdw-toolbar" [ref=e468]:
                            - generic "rdw-inline-control" [ref=e469]:
                              - generic "Bold" [ref=e470] [cursor=pointer]
                              - generic "Italic" [ref=e471] [cursor=pointer]
                              - generic "Underline" [ref=e472] [cursor=pointer]
                              - generic "Strikethrough" [ref=e473] [cursor=pointer]
                              - generic "Monospace" [ref=e474] [cursor=pointer]
                              - generic "Superscript" [ref=e475] [cursor=pointer]
                              - generic "Subscript" [ref=e476] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e477]:
                              - generic "Unordered" [ref=e478] [cursor=pointer]
                              - generic "Ordered" [ref=e479] [cursor=pointer]
                              - generic "Indent" [ref=e480]
                              - generic "Outdent" [ref=e481]
                          - textbox "rdw-editor" [ref=e485]
                      - group "Basic button group" [ref=e491]:
                        - button "Like" [ref=e492] [cursor=pointer]:
                          - img [ref=e493]
                        - button "Dislike" [ref=e495] [cursor=pointer]:
                          - img [ref=e496]
                        - button "Regenerate" [ref=e498] [cursor=pointer]:
                          - img [ref=e499]
                        - button "Clear" [ref=e501] [cursor=pointer]:
                          - img [ref=e502]
                  - generic [ref=e504]:
                    - generic [ref=e505]:
                      - generic [ref=e506]:
                        - generic [ref=e507]:
                          - heading "Pulmonary Diagnostics" [level=6] [ref=e508]
                          - img [ref=e509]
                        - generic "rdw-wrapper" [ref=e513]:
                          - generic "rdw-toolbar" [ref=e514]:
                            - generic "rdw-inline-control" [ref=e515]:
                              - generic "Bold" [ref=e516] [cursor=pointer]
                              - generic "Italic" [ref=e517] [cursor=pointer]
                              - generic "Underline" [ref=e518] [cursor=pointer]
                              - generic "Strikethrough" [ref=e519] [cursor=pointer]
                              - generic "Monospace" [ref=e520] [cursor=pointer]
                              - generic "Superscript" [ref=e521] [cursor=pointer]
                              - generic "Subscript" [ref=e522] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e523]:
                              - generic "Unordered" [ref=e524] [cursor=pointer]
                              - generic "Ordered" [ref=e525] [cursor=pointer]
                              - generic "Indent" [ref=e526]
                              - generic "Outdent" [ref=e527]
                          - textbox "rdw-editor" [ref=e531]
                      - group "Basic button group" [ref=e537]:
                        - button "Like" [ref=e538] [cursor=pointer]:
                          - img [ref=e539]
                        - button "Dislike" [ref=e541] [cursor=pointer]:
                          - img [ref=e542]
                        - button "Regenerate" [ref=e544] [cursor=pointer]:
                          - img [ref=e545]
                        - button "Clear" [ref=e547] [cursor=pointer]:
                          - img [ref=e548]
                    - generic [ref=e550]:
                      - generic [ref=e551]:
                        - generic [ref=e552]:
                          - heading "Gastro-intestinal/Hepatological Diagnostics" [level=6] [ref=e553]
                          - img [ref=e554]
                        - generic "rdw-wrapper" [ref=e558]:
                          - generic "rdw-toolbar" [ref=e559]:
                            - generic "rdw-inline-control" [ref=e560]:
                              - generic "Bold" [ref=e561] [cursor=pointer]
                              - generic "Italic" [ref=e562] [cursor=pointer]
                              - generic "Underline" [ref=e563] [cursor=pointer]
                              - generic "Strikethrough" [ref=e564] [cursor=pointer]
                              - generic "Monospace" [ref=e565] [cursor=pointer]
                              - generic "Superscript" [ref=e566] [cursor=pointer]
                              - generic "Subscript" [ref=e567] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e568]:
                              - generic "Unordered" [ref=e569] [cursor=pointer]
                              - generic "Ordered" [ref=e570] [cursor=pointer]
                              - generic "Indent" [ref=e571]
                              - generic "Outdent" [ref=e572]
                          - textbox "rdw-editor" [ref=e576]
                      - group "Basic button group" [ref=e582]:
                        - button "Like" [ref=e583] [cursor=pointer]:
                          - img [ref=e584]
                        - button "Dislike" [ref=e586] [cursor=pointer]:
                          - img [ref=e587]
                        - button "Regenerate" [ref=e589] [cursor=pointer]:
                          - img [ref=e590]
                        - button "Clear" [ref=e592] [cursor=pointer]:
                          - img [ref=e593]
                  - generic [ref=e595]:
                    - generic [ref=e596]:
                      - generic [ref=e597]:
                        - generic [ref=e598]:
                          - heading "Neurological Diagnostics" [level=6] [ref=e599]
                          - img [ref=e600]
                        - generic "rdw-wrapper" [ref=e604]:
                          - generic "rdw-toolbar" [ref=e605]:
                            - generic "rdw-inline-control" [ref=e606]:
                              - generic "Bold" [ref=e607] [cursor=pointer]
                              - generic "Italic" [ref=e608] [cursor=pointer]
                              - generic "Underline" [ref=e609] [cursor=pointer]
                              - generic "Strikethrough" [ref=e610] [cursor=pointer]
                              - generic "Monospace" [ref=e611] [cursor=pointer]
                              - generic "Superscript" [ref=e612] [cursor=pointer]
                              - generic "Subscript" [ref=e613] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e614]:
                              - generic "Unordered" [ref=e615] [cursor=pointer]
                              - generic "Ordered" [ref=e616] [cursor=pointer]
                              - generic "Indent" [ref=e617]
                              - generic "Outdent" [ref=e618]
                          - textbox "rdw-editor" [ref=e622]
                      - group "Basic button group" [ref=e628]:
                        - button "Like" [ref=e629] [cursor=pointer]:
                          - img [ref=e630]
                        - button "Dislike" [ref=e632] [cursor=pointer]:
                          - img [ref=e633]
                        - button "Regenerate" [ref=e635] [cursor=pointer]:
                          - img [ref=e636]
                        - button "Clear" [ref=e638] [cursor=pointer]:
                          - img [ref=e639]
                    - generic [ref=e641]:
                      - generic [ref=e642]:
                        - generic [ref=e643]:
                          - heading "Nephrological Diagnostics" [level=6] [ref=e644]
                          - img [ref=e645]
                        - generic "rdw-wrapper" [ref=e649]:
                          - generic "rdw-toolbar" [ref=e650]:
                            - generic "rdw-inline-control" [ref=e651]:
                              - generic "Bold" [ref=e652] [cursor=pointer]
                              - generic "Italic" [ref=e653] [cursor=pointer]
                              - generic "Underline" [ref=e654] [cursor=pointer]
                              - generic "Strikethrough" [ref=e655] [cursor=pointer]
                              - generic "Monospace" [ref=e656] [cursor=pointer]
                              - generic "Superscript" [ref=e657] [cursor=pointer]
                              - generic "Subscript" [ref=e658] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e659]:
                              - generic "Unordered" [ref=e660] [cursor=pointer]
                              - generic "Ordered" [ref=e661] [cursor=pointer]
                              - generic "Indent" [ref=e662]
                              - generic "Outdent" [ref=e663]
                          - textbox "rdw-editor" [ref=e667]
                      - group "Basic button group" [ref=e673]:
                        - button "Like" [ref=e674] [cursor=pointer]:
                          - img [ref=e675]
                        - button "Dislike" [ref=e677] [cursor=pointer]:
                          - img [ref=e678]
                        - button "Regenerate" [ref=e680] [cursor=pointer]:
                          - img [ref=e681]
                        - button "Clear" [ref=e683] [cursor=pointer]:
                          - img [ref=e684]
                  - generic [ref=e686]:
                    - generic [ref=e687]:
                      - generic [ref=e688]:
                        - generic [ref=e689]:
                          - heading "Urological Diagnostics" [level=6] [ref=e690]
                          - img [ref=e691]
                        - generic "rdw-wrapper" [ref=e695]:
                          - generic "rdw-toolbar" [ref=e696]:
                            - generic "rdw-inline-control" [ref=e697]:
                              - generic "Bold" [ref=e698] [cursor=pointer]
                              - generic "Italic" [ref=e699] [cursor=pointer]
                              - generic "Underline" [ref=e700] [cursor=pointer]
                              - generic "Strikethrough" [ref=e701] [cursor=pointer]
                              - generic "Monospace" [ref=e702] [cursor=pointer]
                              - generic "Superscript" [ref=e703] [cursor=pointer]
                              - generic "Subscript" [ref=e704] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e705]:
                              - generic "Unordered" [ref=e706] [cursor=pointer]
                              - generic "Ordered" [ref=e707] [cursor=pointer]
                              - generic "Indent" [ref=e708]
                              - generic "Outdent" [ref=e709]
                          - textbox "rdw-editor" [ref=e713]
                      - group "Basic button group" [ref=e719]:
                        - button "Like" [ref=e720] [cursor=pointer]:
                          - img [ref=e721]
                        - button "Dislike" [ref=e723] [cursor=pointer]:
                          - img [ref=e724]
                        - button "Regenerate" [ref=e726] [cursor=pointer]:
                          - img [ref=e727]
                        - button "Clear" [ref=e729] [cursor=pointer]:
                          - img [ref=e730]
                    - generic [ref=e732]:
                      - generic [ref=e733]:
                        - generic [ref=e734]:
                          - heading "Ophthalmological Diagnostics" [level=6] [ref=e735]
                          - img [ref=e736]
                        - generic "rdw-wrapper" [ref=e740]:
                          - generic "rdw-toolbar" [ref=e741]:
                            - generic "rdw-inline-control" [ref=e742]:
                              - generic "Bold" [ref=e743] [cursor=pointer]
                              - generic "Italic" [ref=e744] [cursor=pointer]
                              - generic "Underline" [ref=e745] [cursor=pointer]
                              - generic "Strikethrough" [ref=e746] [cursor=pointer]
                              - generic "Monospace" [ref=e747] [cursor=pointer]
                              - generic "Superscript" [ref=e748] [cursor=pointer]
                              - generic "Subscript" [ref=e749] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e750]:
                              - generic "Unordered" [ref=e751] [cursor=pointer]
                              - generic "Ordered" [ref=e752] [cursor=pointer]
                              - generic "Indent" [ref=e753]
                              - generic "Outdent" [ref=e754]
                          - textbox "rdw-editor" [ref=e758]
                      - group "Basic button group" [ref=e764]:
                        - button "Like" [ref=e765] [cursor=pointer]:
                          - img [ref=e766]
                        - button "Dislike" [ref=e768] [cursor=pointer]:
                          - img [ref=e769]
                        - button "Regenerate" [ref=e771] [cursor=pointer]:
                          - img [ref=e772]
                        - button "Clear" [ref=e774] [cursor=pointer]:
                          - img [ref=e775]
                  - generic [ref=e777]:
                    - generic [ref=e778]:
                      - generic [ref=e779]:
                        - generic [ref=e780]:
                          - heading "Dermatological Diagnostics" [level=6] [ref=e781]
                          - img [ref=e782]
                        - generic "rdw-wrapper" [ref=e786]:
                          - generic "rdw-toolbar" [ref=e787]:
                            - generic "rdw-inline-control" [ref=e788]:
                              - generic "Bold" [ref=e789] [cursor=pointer]
                              - generic "Italic" [ref=e790] [cursor=pointer]
                              - generic "Underline" [ref=e791] [cursor=pointer]
                              - generic "Strikethrough" [ref=e792] [cursor=pointer]
                              - generic "Monospace" [ref=e793] [cursor=pointer]
                              - generic "Superscript" [ref=e794] [cursor=pointer]
                              - generic "Subscript" [ref=e795] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e796]:
                              - generic "Unordered" [ref=e797] [cursor=pointer]
                              - generic "Ordered" [ref=e798] [cursor=pointer]
                              - generic "Indent" [ref=e799]
                              - generic "Outdent" [ref=e800]
                          - textbox "rdw-editor" [ref=e804]
                      - group "Basic button group" [ref=e810]:
                        - button "Like" [ref=e811] [cursor=pointer]:
                          - img [ref=e812]
                        - button "Dislike" [ref=e814] [cursor=pointer]:
                          - img [ref=e815]
                        - button "Regenerate" [ref=e817] [cursor=pointer]:
                          - img [ref=e818]
                        - button "Clear" [ref=e820] [cursor=pointer]:
                          - img [ref=e821]
                    - generic [ref=e823]:
                      - generic [ref=e824]:
                        - generic [ref=e825]:
                          - heading "Reproductive Diagnostics" [level=6] [ref=e826]
                          - img [ref=e827]
                        - generic "rdw-wrapper" [ref=e831]:
                          - generic "rdw-toolbar" [ref=e832]:
                            - generic "rdw-inline-control" [ref=e833]:
                              - generic "Bold" [ref=e834] [cursor=pointer]
                              - generic "Italic" [ref=e835] [cursor=pointer]
                              - generic "Underline" [ref=e836] [cursor=pointer]
                              - generic "Strikethrough" [ref=e837] [cursor=pointer]
                              - generic "Monospace" [ref=e838] [cursor=pointer]
                              - generic "Superscript" [ref=e839] [cursor=pointer]
                              - generic "Subscript" [ref=e840] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e841]:
                              - generic "Unordered" [ref=e842] [cursor=pointer]
                              - generic "Ordered" [ref=e843] [cursor=pointer]
                              - generic "Indent" [ref=e844]
                              - generic "Outdent" [ref=e845]
                          - textbox "rdw-editor" [ref=e849]
                      - group "Basic button group" [ref=e855]:
                        - button "Like" [ref=e856] [cursor=pointer]:
                          - img [ref=e857]
                        - button "Dislike" [ref=e859] [cursor=pointer]:
                          - img [ref=e860]
                        - button "Regenerate" [ref=e862] [cursor=pointer]:
                          - img [ref=e863]
                        - button "Clear" [ref=e865] [cursor=pointer]:
                          - img [ref=e866]
                  - generic [ref=e868]:
                    - generic [ref=e869]:
                      - generic [ref=e870]:
                        - generic [ref=e871]:
                          - heading "ENT Diagnostics" [level=6] [ref=e872]
                          - img [ref=e873]
                        - generic "rdw-wrapper" [ref=e877]:
                          - generic "rdw-toolbar" [ref=e878]:
                            - generic "rdw-inline-control" [ref=e879]:
                              - generic "Bold" [ref=e880] [cursor=pointer]
                              - generic "Italic" [ref=e881] [cursor=pointer]
                              - generic "Underline" [ref=e882] [cursor=pointer]
                              - generic "Strikethrough" [ref=e883] [cursor=pointer]
                              - generic "Monospace" [ref=e884] [cursor=pointer]
                              - generic "Superscript" [ref=e885] [cursor=pointer]
                              - generic "Subscript" [ref=e886] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e887]:
                              - generic "Unordered" [ref=e888] [cursor=pointer]
                              - generic "Ordered" [ref=e889] [cursor=pointer]
                              - generic "Indent" [ref=e890]
                              - generic "Outdent" [ref=e891]
                          - textbox "rdw-editor" [ref=e895]
                      - group "Basic button group" [ref=e901]:
                        - button "Like" [ref=e902] [cursor=pointer]:
                          - img [ref=e903]
                        - button "Dislike" [ref=e905] [cursor=pointer]:
                          - img [ref=e906]
                        - button "Regenerate" [ref=e908] [cursor=pointer]:
                          - img [ref=e909]
                        - button "Clear" [ref=e911] [cursor=pointer]:
                          - img [ref=e912]
                    - generic [ref=e914]:
                      - generic [ref=e915]:
                        - generic [ref=e916]:
                          - heading "Endocrinological Diagnostics" [level=6] [ref=e917]
                          - img [ref=e918]
                        - generic "rdw-wrapper" [ref=e922]:
                          - generic "rdw-toolbar" [ref=e923]:
                            - generic "rdw-inline-control" [ref=e924]:
                              - generic "Bold" [ref=e925] [cursor=pointer]
                              - generic "Italic" [ref=e926] [cursor=pointer]
                              - generic "Underline" [ref=e927] [cursor=pointer]
                              - generic "Strikethrough" [ref=e928] [cursor=pointer]
                              - generic "Monospace" [ref=e929] [cursor=pointer]
                              - generic "Superscript" [ref=e930] [cursor=pointer]
                              - generic "Subscript" [ref=e931] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e932]:
                              - generic "Unordered" [ref=e933] [cursor=pointer]
                              - generic "Ordered" [ref=e934] [cursor=pointer]
                              - generic "Indent" [ref=e935]
                              - generic "Outdent" [ref=e936]
                          - textbox "rdw-editor" [ref=e940]
                      - group "Basic button group" [ref=e946]:
                        - button "Like" [ref=e947] [cursor=pointer]:
                          - img [ref=e948]
                        - button "Dislike" [ref=e950] [cursor=pointer]:
                          - img [ref=e951]
                        - button "Regenerate" [ref=e953] [cursor=pointer]:
                          - img [ref=e954]
                        - button "Clear" [ref=e956] [cursor=pointer]:
                          - img [ref=e957]
                  - generic [ref=e959]:
                    - generic [ref=e960]:
                      - generic [ref=e961]:
                        - generic [ref=e962]:
                          - heading "Orthopedic Diagnostics" [level=6] [ref=e963]
                          - img [ref=e964]
                        - generic "rdw-wrapper" [ref=e968]:
                          - generic "rdw-toolbar" [ref=e969]:
                            - generic "rdw-inline-control" [ref=e970]:
                              - generic "Bold" [ref=e971] [cursor=pointer]
                              - generic "Italic" [ref=e972] [cursor=pointer]
                              - generic "Underline" [ref=e973] [cursor=pointer]
                              - generic "Strikethrough" [ref=e974] [cursor=pointer]
                              - generic "Monospace" [ref=e975] [cursor=pointer]
                              - generic "Superscript" [ref=e976] [cursor=pointer]
                              - generic "Subscript" [ref=e977] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e978]:
                              - generic "Unordered" [ref=e979] [cursor=pointer]
                              - generic "Ordered" [ref=e980] [cursor=pointer]
                              - generic "Indent" [ref=e981]
                              - generic "Outdent" [ref=e982]
                          - textbox "rdw-editor" [ref=e986]
                      - group "Basic button group" [ref=e992]:
                        - button "Like" [ref=e993] [cursor=pointer]:
                          - img [ref=e994]
                        - button "Dislike" [ref=e996] [cursor=pointer]:
                          - img [ref=e997]
                        - button "Regenerate" [ref=e999] [cursor=pointer]:
                          - img [ref=e1000]
                        - button "Clear" [ref=e1002] [cursor=pointer]:
                          - img [ref=e1003]
                    - generic [ref=e1005]:
                      - generic [ref=e1006]:
                        - generic [ref=e1007]:
                          - heading "Pediatric Diagnostics" [level=6] [ref=e1008]
                          - img [ref=e1009]
                        - generic "rdw-wrapper" [ref=e1013]:
                          - generic "rdw-toolbar" [ref=e1014]:
                            - generic "rdw-inline-control" [ref=e1015]:
                              - generic "Bold" [ref=e1016] [cursor=pointer]
                              - generic "Italic" [ref=e1017] [cursor=pointer]
                              - generic "Underline" [ref=e1018] [cursor=pointer]
                              - generic "Strikethrough" [ref=e1019] [cursor=pointer]
                              - generic "Monospace" [ref=e1020] [cursor=pointer]
                              - generic "Superscript" [ref=e1021] [cursor=pointer]
                              - generic "Subscript" [ref=e1022] [cursor=pointer]
                            - generic "rdw-list-control" [ref=e1023]:
                              - generic "Unordered" [ref=e1024] [cursor=pointer]
                              - generic "Ordered" [ref=e1025] [cursor=pointer]
                              - generic "Indent" [ref=e1026]
                              - generic "Outdent" [ref=e1027]
                          - textbox "rdw-editor" [ref=e1031]
                      - group "Basic button group" [ref=e1037]:
                        - button "Like" [ref=e1038] [cursor=pointer]:
                          - img [ref=e1039]
                        - button "Dislike" [ref=e1041] [cursor=pointer]:
                          - img [ref=e1042]
                        - button "Regenerate" [ref=e1044] [cursor=pointer]:
                          - img [ref=e1045]
                        - button "Clear" [ref=e1047] [cursor=pointer]:
                          - img [ref=e1048]
      - contentinfo [ref=e1051]:
        - paragraph [ref=e1053]: asksam does not provide medical advice, diagnosis, or treatment recommendations. Output must be reviewed by a qualified clinician. asksam is not designed to replace clinical reasoning or provide medical decision guidance.
```

# Test source

```ts
  63  |       name: /Confirm and create clinical/i,
  64  |     }).click();
  65  | 
  66  |     console.log('✅ Created patient:', {
  67  |       firstName: this.firstName,
  68  |       lastName: this.lastName,
  69  |       email: this.email,
  70  |     });
  71  |   }
  72  | 
  73  |   async uploadAndTranscribe() {
  74  |     const filePath = path.resolve('uploads/Yamini_Pal_Health_Summary.pdf');
  75  | 
  76  |     await this.page.getByRole('button', { name: 'Upload' }).waitFor({ state: 'visible', timeout: 60000 });
  77  |     await this.page.getByRole('button', { name: 'Upload' }).click();
  78  |     await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles(filePath);
  79  | 
  80  |     await this.page.getByRole('button', { name: 'Transcribe All' }).click();
  81  | 
  82  |     // Wait for Send Transcription to appear and be enabled
  83  |     const sendBtn = this.page.getByRole('button', { name: 'Send Transcription' });
  84  |     await sendBtn.waitFor({ state: 'visible', timeout: 120000 });
  85  |     await this.page.waitForFunction(
  86  |       () => !document.querySelector('#notetaker_send_transcription')?.disabled,
  87  |       { timeout: 30000 }
  88  |     ).catch(() => {});
  89  |     await sendBtn.click();
  90  | 
  91  |     console.log('⏳ Waiting for transcription / disclaimer / submit…');
  92  | 
  93  |     // ✅ DO NOT wait for "Processing transcription" to disappear
  94  |     await Promise.race([
  95  |       this.page
  96  |         .getByRole('button', { name: /I Understand and Accept/i })
  97  |         .waitFor({ timeout: 120000 }),
  98  | 
  99  |       this.page
  100 |         .getByRole('button', { name: 'Submit' })
  101 |         .waitFor({ timeout: 120000 }),
  102 |     ]).catch(() => {});
  103 | 
  104 |     // The flow shows TWO disclaimers in sequence (matches dashboard.page.js
  105 |     // acceptDisclaimers). Previously we only dismissed the first, the second
  106 |     // stayed open, and the page never navigated to the note detail view —
  107 |     // submit then failed because there was no Submit button on /clinical/home.
  108 |     const disclaimerBtn = this.page.getByRole('button', {
  109 |       name: /I Understand and Accept/i,
  110 |     });
  111 | 
  112 |     for (let i = 1; i <= 2; i++) {
  113 |       if (await disclaimerBtn.first().isVisible({ timeout: 10000 }).catch(() => false)) {
  114 |         await disclaimerBtn.first().click();
  115 |         console.log(`✅ Disclaimer ${i} accepted`);
  116 |         await this.page.waitForTimeout(2000); // wait for next modal / navigation
  117 |       } else if (i === 1) {
  118 |         console.log('ℹ️ Disclaimer not shown, continuing');
  119 |         break;
  120 |       } else {
  121 |         // Second disclaimer didn't appear — that's OK, some flows only have one
  122 |         break;
  123 |       }
  124 |     }
  125 |   }
  126 | 
  127 |   async verifyClinicalTabsHaveData() {
  128 |     const tabs = ['Clinical Advice', 'Clinical Examination', 'Follow-Up Note', 'Case History'];
  129 |     const perTabWait = 90000; // 90 seconds per tab
  130 |     const failedTabs = [];
  131 |     let foundAnyTab = false;
  132 | 
  133 |     // First — wait briefly for tabs to render (the note detail page can take
  134 |     // a few seconds to mount after the disclaimer dismisses).
  135 |     await this.page.getByRole('tab', { name: tabs[0] })
  136 |       .waitFor({ state: 'visible', timeout: 30000 })
  137 |       .catch(() => {});
  138 | 
  139 |     for (const tabName of tabs) {
  140 |       const tab = this.page.getByRole('tab', { name: tabName });
  141 |       if (!(await tab.isVisible().catch(() => false))) {
  142 |         console.log(`⚠ ${tabName} tab not found — skipping`);
  143 |         continue;
  144 |       }
  145 |       foundAnyTab = true;
  146 | 
  147 |       await tab.click();
  148 |       await this.page.waitForTimeout(1500);
  149 | 
  150 |       // Wait up to 90s for this tab to have meaningful content
  151 |       const startTime = Date.now();
  152 |       let fieldCount = 0;
  153 |       while (Date.now() - startTime < perTabWait) {
  154 |         const editables = await this.page.locator('[contenteditable="true"]').allTextContents();
  155 |         const meaningful = editables.filter(t => {
  156 |           const trimmed = t.trim();
  157 |           return trimmed.length > 5 && !trimmed.includes('No information');
  158 |         });
  159 |         if (meaningful.length > 0) {
  160 |           fieldCount = meaningful.length;
  161 |           break;
  162 |         }
> 163 |         await this.page.waitForTimeout(3000);
      |                         ^ Error: page.waitForTimeout: Test timeout of 180000ms exceeded.
  164 |       }
  165 | 
  166 |       if (fieldCount > 0) {
  167 |         console.log(`✅ ${tabName}: ${fieldCount} fields with data`);
  168 |       } else {
  169 |         console.log(`❌ ${tabName}: NO DATA after 90s`);
  170 |         failedTabs.push(tabName);
  171 |       }
  172 |     }
  173 | 
  174 |     if (!foundAnyTab) {
  175 |       const url = this.page.url();
  176 |       // The app sometimes navigates to ?clinicalId=null with a "no permission"
  177 |       // empty-state — meaning the backend transcription/note-creation call
  178 |       // failed silently. Surface this as an APP-SIDE failure with clear context.
  179 |       const hasPermissionError = await this.page
  180 |         .getByText(/don.t have permission to view these details/i)
  181 |         .isVisible({ timeout: 2000 })
  182 |         .catch(() => false);
  183 |       const isNullClinicalId = url.includes('clinicalId=null');
  184 | 
  185 |       if (hasPermissionError || isNullClinicalId) {
  186 |         throw new Error(
  187 |           `APP-SIDE FAILURE: note creation backend call did not produce a valid clinicalId.\n` +
  188 |           `URL at failure: ${url}\n` +
  189 |           `App showed: "you don't have permission to view these details" (${hasPermissionError}).\n` +
  190 |           `This means the upload/transcribe API succeeded but the resulting note ` +
  191 |           `record was not created in the backend, or was created without owner ` +
  192 |           `permissions. Forward the cookies.json + redirect-chain.txt + console.log ` +
  193 |           `forensics artifacts to the dev team — the test code is correct, the API ` +
  194 |           `response is the issue.`
  195 |         );
  196 |       }
  197 | 
  198 |       throw new Error(
  199 |         `No clinical tabs found on the page (URL: ${url}). ` +
  200 |         `The note creation flow likely landed on the wrong page — check the disclaimer accept step.`
  201 |       );
  202 |     }
  203 | 
  204 |     if (failedTabs.length > 0) {
  205 |       throw new Error(
  206 |         `Clinical note tabs have no data after 90s wait: ${failedTabs.join(', ')} — transcription incomplete`
  207 |       );
  208 |     }
  209 | 
  210 |     const firstTab = this.page.getByRole('tab', { name: 'Clinical Advice' });
  211 |     if (await firstTab.isVisible().catch(() => false)) {
  212 |       await firstTab.click();
  213 |       await this.page.waitForTimeout(1000);
  214 |     }
  215 |   }
  216 | 
  217 |   async submitClinicalNote() {
  218 |     // The Submit button often appears disabled while the note is still
  219 |     // saving/transcribing in the background. Wait for it to become visible
  220 |     // AND enabled before clicking — prevents 30s timeouts on the bare .click().
  221 |     const submitBtn = this.page.getByRole('button', { name: 'Submit' });
  222 |     await submitBtn.first().waitFor({ state: 'visible', timeout: 60000 });
  223 |     // Wait until at least one Submit button is enabled
  224 |     await this.page.waitForFunction(
  225 |       () => Array.from(document.querySelectorAll('button')).some(
  226 |         (b) => b.textContent?.trim() === 'Submit' && !b.disabled
  227 |       ),
  228 |       { timeout: 60000 }
  229 |     ).catch(() => {});
  230 |     await submitBtn.first().click();
  231 | 
  232 |     // Second Submit is the confirm-dialog button; wait for it explicitly
  233 |     // (a fresh element renders inside the dialog, so re-resolve)
  234 |     await this.page.waitForTimeout(500);
  235 |     const confirmBtn = this.page.getByRole('button', { name: 'Submit' });
  236 |     await confirmBtn.last().waitFor({ state: 'visible', timeout: 30000 });
  237 |     await confirmBtn.last().click();
  238 | 
  239 |     await this.page
  240 |       .getByText(/Your note has been submitted/i)
  241 |       .waitFor({ timeout: 60000 });
  242 | 
  243 |     console.log('✅ Clinical note submitted');
  244 |   }
  245 | }
```