<template>
  <div class="interaction_panel">
    <!-- Réglages -->
    <el-tabs v-model="activeName"
    tab-position="left">
      <el-tab-pane label="Contacts" name="contact">
        <contacts-types-settings
          :edit="edit" />
        <contacts-tab-settings-water-switch
          :edit="edit" />
        <contacts-tab-settings-within-radius
          :edit="edit" />

      </el-tab-pane>
      <el-tab-pane label="Cible" name="target">
        <div class="contact-settings">
          <contacts-tab-settings-representation-select
            :edit="edit"
            repr="target"/>

          <contacts-tab-settings-color-select
            :edit="edit"
            repr="target"/>

        </div>
      </el-tab-pane>
      <el-tab-pane label="Entourage" name="vicinity">
        <contacts-tab-settings-visibility-switch
          :edit="edit"
          repr="vicinity" />

        <contacts-tab-settings-representation-select
            :edit="edit"
            repr="vicinity"/>

        <contacts-tab-settings-color-select
          :edit="edit"
          repr="vicinity"/>

      </el-tab-pane>
      <el-tab-pane label="Etiquettes" name="labels">
        <contacts-tab-settings-visibility-switch
          :edit="edit"
          repr="label" />

        <contacts-tab-settings-label-size
          :edit="edit" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ContactsTabSettingsRepresentationSelect from './ContactsTabSettingsRepresentationSelect'
import ContactsTabSettingsColorSelect from './ContactsTabSettingsColorSelect'
import ContactsTabSettingsVisibilitySwitch from './ContactsTabSettingsVisibilitySwitch'
import ContactsTypesSettings from './ContactsTypesSettings'
import ContactsTabSettingsWaterSwitch from './ContactsTabSettingsWaterSwitch'
import ContactsTabSettingsWithinRadius from './ContactsTabSettingsWithinRadius'
import ContactsTabSettingsLabelSize from './ContactsTabSettingsLabelSize'

export default {
  name: 'ContactsTabContactsSettings',
  components: {
    ContactsTabSettingsRepresentationSelect,
    ContactsTabSettingsColorSelect,
    ContactsTabSettingsVisibilitySwitch,
    ContactsTypesSettings,
    ContactsTabSettingsWaterSwitch,
    ContactsTabSettingsWithinRadius,
    ContactsTabSettingsLabelSize
  },
  props: {
    edit: {
      default: -1,
      type: Number
    }
  },
  data () {
    return {
      activeName: 'contact'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .interaction_panel {
      padding-top: 1em;
      border-top: 1px solid #e1e7eb;
    }

    .contact-settings {
      padding: 0 5px;
    }
</style>
