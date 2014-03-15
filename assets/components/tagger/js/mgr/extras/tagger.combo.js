Tagger.combo.Group = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'group'
        ,hiddenName: 'group'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['name','id']
        ,pageSize: 20
        ,url: Tagger.config.connectorUrl
        ,baseParams:{
            action: 'mgr/group/getlist'
        }
    });
    Tagger.combo.Group.superclass.constructor.call(this,config);
};
Ext.extend(Tagger.combo.Group,MODx.combo.ComboBox);
Ext.reg('tagger-combo-group',Tagger.combo.Group);