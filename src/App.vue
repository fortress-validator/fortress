<script setup lang="ts">
import { FormValidator } from '../dist';

const validator = new FormValidator();
</script>

<template>
  <v-app>
    <v-container class="fill-height d-flex justify-center">
      <v-card :min-width="600">
        <v-card-title class="pa-5">
          Fortress
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-form>
            <v-text-field
              label="Input"
              variant="outlined"
              :rules="(
                validator
                  .defineField('Input')
                  .required()
                  .alphaDash()
                  .collect()
              )"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
