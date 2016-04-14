var
  Control = require('enyo/Control');

var scoremain = Control.kind({
  classes: 'score inline',
  components: [
    {classes: 'team-info', components: [
      {name: 'awayName'},
      {name: 'awayRun'}
    ]},
    {name: 'divider', classes: 'moon-2h'},
    {classes: 'team-info', components: [
      {name: 'homeName'},
      {name: 'homeRun'}
    ]}
  ],
  dataChanged: function() {
    this.$.homeName.set('content', this.data.home.name);
    this.$.awayName.set('content', this.data.away.name);
    this.$.homeRun.set('content', this.data.home.run);
    this.$.awayRun.set('content', this.data.away.run);

    this.$.divider.set('content', this.data.away.run && this.data.home.run? '-': '@');
  }
});

module.exports = scoremain;