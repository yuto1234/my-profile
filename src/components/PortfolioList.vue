<template>
<div>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <img :src="item.image" style="width: 195px">
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>{{ item.text }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Language:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.language }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Framework:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.framework }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content><a :href="item.deploy" target="blank">Deployment destination</a></v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content><a :href="item.repository" target="blank">Github repository</a></v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
      itemsPerPage: 4,
      items: [
        {
          name: 'ChatSpace',
          language: 'Ruby',
          framework: 'Rails',
          image: require('../assets/s_ChatSpace-min.jpg'),
          deploy: 'http://3.113.191.52/',
          repository: 'https://github.com/yuto1234/chat-space',
          text: 'スクールのカリキュラムで作成したチャットサイトです。'
        },
        {
          name: 'Mercari',
          language: 'Ruby',
          framework: 'Rails',
          image: require('../assets/s_ChatSpace-min.jpg'),
          deploy: '#',
          repository: '#',
          text: 'ああああああああああああああああああああああああああああああああああああああ'
        },
        {
          name: 'my-profile',
          language: 'Vue.js',
          framework: 'Vue.CLI',
          image: require('../assets/s_my-profile-min.jpg'),
          deploy: '#',
          repository: '#',
          text: 'SPAサイトを作ってみたくて簡単なプロフィールサイトを作成しました。'
        },
        {
          name: 'FootShare',
          language: 'Ruby',
          framework: 'Rails',
          image: require('../assets/s_FootShare-min.jpg'),
          deploy: '#',
          repository: 'https://github.com/yuto1234/FootShare',
          text: 'サッカーの試合レビューをシェアするサイトがあれば面白いなと思い作成しました。'
        },
      ],
    }),
  }
</script>