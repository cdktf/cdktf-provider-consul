# `configEntryServiceSplitter` Submodule <a name="`configEntryServiceSplitter` Submodule" id="@cdktf/provider-consul.configEntryServiceSplitter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceSplitter <a name="ConfigEntryServiceSplitter" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter consul_config_entry_service_splitter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitter;

ConfigEntryServiceSplitter.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .splits(IResolvable)
    .splits(java.util.List<ConfigEntryServiceSplitterSplits>)
//  .id(java.lang.String)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.splits">splits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>></code> | splits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition to apply the configuration entry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#name ConfigEntryServiceSplitter#name}

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.splits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>>

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#splits ConfigEntryServiceSplitter#splits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.meta"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#meta ConfigEntryServiceSplitter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits">putSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition">resetPartition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSplits` <a name="putSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits"></a>

```java
public void putSplits(IResolvable OR java.util.List<ConfigEntryServiceSplitterSplits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId"></a>

```java
public void resetId()
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta"></a>

```java
public void resetMeta()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition"></a>

```java
public void resetPartition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitter;

ConfigEntryServiceSplitter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitter;

ConfigEntryServiceSplitter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitter;

ConfigEntryServiceSplitter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitter;

ConfigEntryServiceSplitter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigEntryServiceSplitter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigEntryServiceSplitter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigEntryServiceSplitter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceSplitter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits">splits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput">metaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput">splitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits"></a>

```java
public ConfigEntryServiceSplitterSplitsList getSplits();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `splitsInput`<sup>Optional</sup> <a name="splitsInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput"></a>

```java
public java.lang.Object getSplitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceSplitterConfig <a name="ConfigEntryServiceSplitterConfig" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterConfig;

ConfigEntryServiceSplitterConfig.builder()
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
    .name(java.lang.String)
    .splits(IResolvable)
    .splits(java.util.List<ConfigEntryServiceSplitterSplits>)
//  .id(java.lang.String)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits">splits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>></code> | splits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition to apply the configuration entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#name ConfigEntryServiceSplitter#name}

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits"></a>

```java
public java.lang.Object getSplits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>>

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#splits ConfigEntryServiceSplitter#splits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#meta ConfigEntryServiceSplitter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

### ConfigEntryServiceSplitterSplits <a name="ConfigEntryServiceSplitterSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterSplits;

ConfigEntryServiceSplitterSplits.builder()
    .service(java.lang.String)
    .weight(java.lang.Number)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .requestHeaders(ConfigEntryServiceSplitterSplitsRequestHeaders)
//  .responseHeaders(ConfigEntryServiceSplitterSplitsResponseHeaders)
//  .serviceSubset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service">service</a></code> | <code>java.lang.String</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight">weight</a></code> | <code>java.lang.Number</code> | Specifies the percentage of traffic sent to the set of service instances specified in the `service` field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | Specifies a subset of the service to resolve. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#service ConfigEntryServiceSplitter#service}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Specifies the percentage of traffic sent to the set of service instances specified in the `service` field.

Each weight must be a floating integer between `0` and `100`. The smallest representable value is `.01`. The sum of weights across all splits must add up to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#weight ConfigEntryServiceSplitter#weight}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the namespace to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Specifies the admin partition to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders"></a>

```java
public ConfigEntryServiceSplitterSplitsRequestHeaders getRequestHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#request_headers ConfigEntryServiceSplitter#request_headers}

---

##### `responseHeaders`<sup>Optional</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders"></a>

```java
public ConfigEntryServiceSplitterSplitsResponseHeaders getResponseHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#response_headers ConfigEntryServiceSplitter#response_headers}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

Specifies a subset of the service to resolve.

A service subset assigns a name to a specific subset of discoverable service instances within a datacenter, such as `version2` or `canary`. All services have an unnamed default subset that returns all healthy instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#service_subset ConfigEntryServiceSplitter#service_subset}

---

### ConfigEntryServiceSplitterSplitsRequestHeaders <a name="ConfigEntryServiceSplitterSplitsRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterSplitsRequestHeaders;

ConfigEntryServiceSplitterSplitsRequestHeaders.builder()
//  .add(java.util.Map<java.lang.String, java.lang.String>)
//  .remove(java.util.List<java.lang.String>)
//  .set(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of one or more key-value pairs. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

### ConfigEntryServiceSplitterSplitsResponseHeaders <a name="ConfigEntryServiceSplitterSplitsResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterSplitsResponseHeaders;

ConfigEntryServiceSplitterSplitsResponseHeaders.builder()
//  .add(java.util.Map<java.lang.String, java.lang.String>)
//  .remove(java.util.List<java.lang.String>)
//  .set(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of one or more key-value pairs. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceSplitterSplitsList <a name="ConfigEntryServiceSplitterSplitsList" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterSplitsList;

new ConfigEntryServiceSplitterSplitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get"></a>

```java
public ConfigEntryServiceSplitterSplitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>>

---


### ConfigEntryServiceSplitterSplitsOutputReference <a name="ConfigEntryServiceSplitterSplitsOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterSplitsOutputReference;

new ConfigEntryServiceSplitterSplitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders">putRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders">putResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders">resetResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeaders` <a name="putRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders"></a>

```java
public void putRequestHeaders(ConfigEntryServiceSplitterSplitsRequestHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `putResponseHeaders` <a name="putResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders"></a>

```java
public void putResponseHeaders(ConfigEntryServiceSplitterSplitsResponseHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders"></a>

```java
public void resetRequestHeaders()
```

##### `resetResponseHeaders` <a name="resetResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders"></a>

```java
public void resetResponseHeaders()
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset"></a>

```java
public void resetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput">responseHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders"></a>

```java
public ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference getRequestHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a>

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders"></a>

```java
public ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference getResponseHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput"></a>

```java
public ConfigEntryServiceSplitterSplitsRequestHeaders getRequestHeadersInput();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `responseHeadersInput`<sup>Optional</sup> <a name="responseHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput"></a>

```java
public ConfigEntryServiceSplitterSplitsResponseHeaders getResponseHeadersInput();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput"></a>

```java
public java.lang.String getServiceSubsetInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>

---


### ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference;

new ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd"></a>

```java
public void resetAdd()
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove"></a>

```java
public void resetRemove()
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet"></a>

```java
public void resetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput">addInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput">setInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput"></a>

```java
public java.util.List<java.lang.String> getRemoveInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSetInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue"></a>

```java
public ConfigEntryServiceSplitterSplitsRequestHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---


### ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_splitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference;

new ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd"></a>

```java
public void resetAdd()
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove"></a>

```java
public void resetRemove()
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet"></a>

```java
public void resetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput">addInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput">setInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput"></a>

```java
public java.util.List<java.lang.String> getRemoveInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSetInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue"></a>

```java
public ConfigEntryServiceSplitterSplitsResponseHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---



