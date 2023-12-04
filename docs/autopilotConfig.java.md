# `autopilotConfig` Submodule <a name="`autopilotConfig` Submodule" id="@cdktf/provider-consul.autopilotConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutopilotConfig <a name="AutopilotConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config consul_autopilot_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.autopilot_config.AutopilotConfig;

AutopilotConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .cleanupDeadServers(java.lang.Boolean)
//  .cleanupDeadServers(IResolvable)
//  .datacenter(java.lang.String)
//  .disableUpgradeMigration(java.lang.Boolean)
//  .disableUpgradeMigration(IResolvable)
//  .id(java.lang.String)
//  .lastContactThreshold(java.lang.String)
//  .maxTrailingLogs(java.lang.Number)
//  .redundancyZoneTag(java.lang.String)
//  .serverStabilizationTime(java.lang.String)
//  .upgradeVersionTag(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.cleanupDeadServers">cleanupDeadServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lastContactThreshold">lastContactThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.maxTrailingLogs">maxTrailingLogs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.redundancyZoneTag">redundancyZoneTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.serverStabilizationTime">serverStabilizationTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.upgradeVersionTag">upgradeVersionTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cleanupDeadServers`<sup>Optional</sup> <a name="cleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.cleanupDeadServers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}.

---

##### `disableUpgradeMigration`<sup>Optional</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.disableUpgradeMigration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastContactThreshold`<sup>Optional</sup> <a name="lastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lastContactThreshold"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}.

---

##### `maxTrailingLogs`<sup>Optional</sup> <a name="maxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.maxTrailingLogs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}.

---

##### `redundancyZoneTag`<sup>Optional</sup> <a name="redundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.redundancyZoneTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}.

---

##### `serverStabilizationTime`<sup>Optional</sup> <a name="serverStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.serverStabilizationTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}.

---

##### `upgradeVersionTag`<sup>Optional</sup> <a name="upgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.upgradeVersionTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers">resetCleanupDeadServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration">resetDisableUpgradeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold">resetLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs">resetMaxTrailingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag">resetRedundancyZoneTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime">resetServerStabilizationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag">resetUpgradeVersionTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCleanupDeadServers` <a name="resetCleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers"></a>

```java
public void resetCleanupDeadServers()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetDisableUpgradeMigration` <a name="resetDisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration"></a>

```java
public void resetDisableUpgradeMigration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLastContactThreshold` <a name="resetLastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold"></a>

```java
public void resetLastContactThreshold()
```

##### `resetMaxTrailingLogs` <a name="resetMaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs"></a>

```java
public void resetMaxTrailingLogs()
```

##### `resetRedundancyZoneTag` <a name="resetRedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag"></a>

```java
public void resetRedundancyZoneTag()
```

##### `resetServerStabilizationTime` <a name="resetServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime"></a>

```java
public void resetServerStabilizationTime()
```

##### `resetUpgradeVersionTag` <a name="resetUpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag"></a>

```java
public void resetUpgradeVersionTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.autopilot_config.AutopilotConfig;

AutopilotConfig.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.autopilot_config.AutopilotConfig;

AutopilotConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.autopilot_config.AutopilotConfig;

AutopilotConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.autopilot_config.AutopilotConfig;

AutopilotConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutopilotConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutopilotConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutopilotConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AutopilotConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput">cleanupDeadServersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput">disableUpgradeMigrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput">lastContactThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput">maxTrailingLogsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput">redundancyZoneTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput">serverStabilizationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput">upgradeVersionTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold">lastContactThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag">redundancyZoneTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag">upgradeVersionTag</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cleanupDeadServersInput`<sup>Optional</sup> <a name="cleanupDeadServersInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput"></a>

```java
public java.lang.Object getCleanupDeadServersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `disableUpgradeMigrationInput`<sup>Optional</sup> <a name="disableUpgradeMigrationInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput"></a>

```java
public java.lang.Object getDisableUpgradeMigrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastContactThresholdInput`<sup>Optional</sup> <a name="lastContactThresholdInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput"></a>

```java
public java.lang.String getLastContactThresholdInput();
```

- *Type:* java.lang.String

---

##### `maxTrailingLogsInput`<sup>Optional</sup> <a name="maxTrailingLogsInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput"></a>

```java
public java.lang.Number getMaxTrailingLogsInput();
```

- *Type:* java.lang.Number

---

##### `redundancyZoneTagInput`<sup>Optional</sup> <a name="redundancyZoneTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput"></a>

```java
public java.lang.String getRedundancyZoneTagInput();
```

- *Type:* java.lang.String

---

##### `serverStabilizationTimeInput`<sup>Optional</sup> <a name="serverStabilizationTimeInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput"></a>

```java
public java.lang.String getServerStabilizationTimeInput();
```

- *Type:* java.lang.String

---

##### `upgradeVersionTagInput`<sup>Optional</sup> <a name="upgradeVersionTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput"></a>

```java
public java.lang.String getUpgradeVersionTagInput();
```

- *Type:* java.lang.String

---

##### `cleanupDeadServers`<sup>Required</sup> <a name="cleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers"></a>

```java
public java.lang.Object getCleanupDeadServers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `disableUpgradeMigration`<sup>Required</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration"></a>

```java
public java.lang.Object getDisableUpgradeMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastContactThreshold`<sup>Required</sup> <a name="lastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold"></a>

```java
public java.lang.String getLastContactThreshold();
```

- *Type:* java.lang.String

---

##### `maxTrailingLogs`<sup>Required</sup> <a name="maxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs"></a>

```java
public java.lang.Number getMaxTrailingLogs();
```

- *Type:* java.lang.Number

---

##### `redundancyZoneTag`<sup>Required</sup> <a name="redundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag"></a>

```java
public java.lang.String getRedundancyZoneTag();
```

- *Type:* java.lang.String

---

##### `serverStabilizationTime`<sup>Required</sup> <a name="serverStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime"></a>

```java
public java.lang.String getServerStabilizationTime();
```

- *Type:* java.lang.String

---

##### `upgradeVersionTag`<sup>Required</sup> <a name="upgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag"></a>

```java
public java.lang.String getUpgradeVersionTag();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutopilotConfigConfig <a name="AutopilotConfigConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.autopilot_config.AutopilotConfigConfig;

AutopilotConfigConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .cleanupDeadServers(java.lang.Boolean)
//  .cleanupDeadServers(IResolvable)
//  .datacenter(java.lang.String)
//  .disableUpgradeMigration(java.lang.Boolean)
//  .disableUpgradeMigration(IResolvable)
//  .id(java.lang.String)
//  .lastContactThreshold(java.lang.String)
//  .maxTrailingLogs(java.lang.Number)
//  .redundancyZoneTag(java.lang.String)
//  .serverStabilizationTime(java.lang.String)
//  .upgradeVersionTag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold">lastContactThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag">redundancyZoneTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag">upgradeVersionTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cleanupDeadServers`<sup>Optional</sup> <a name="cleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers"></a>

```java
public java.lang.Object getCleanupDeadServers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}.

---

##### `disableUpgradeMigration`<sup>Optional</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration"></a>

```java
public java.lang.Object getDisableUpgradeMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastContactThreshold`<sup>Optional</sup> <a name="lastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold"></a>

```java
public java.lang.String getLastContactThreshold();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}.

---

##### `maxTrailingLogs`<sup>Optional</sup> <a name="maxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs"></a>

```java
public java.lang.Number getMaxTrailingLogs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}.

---

##### `redundancyZoneTag`<sup>Optional</sup> <a name="redundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag"></a>

```java
public java.lang.String getRedundancyZoneTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}.

---

##### `serverStabilizationTime`<sup>Optional</sup> <a name="serverStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime"></a>

```java
public java.lang.String getServerStabilizationTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}.

---

##### `upgradeVersionTag`<sup>Optional</sup> <a name="upgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag"></a>

```java
public java.lang.String getUpgradeVersionTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}.

---



