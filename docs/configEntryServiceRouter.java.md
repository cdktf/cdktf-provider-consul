# `configEntryServiceRouter` Submodule <a name="`configEntryServiceRouter` Submodule" id="@cdktf/provider-consul.configEntryServiceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceRouter <a name="ConfigEntryServiceRouter" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router consul_config_entry_service_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouter;

ConfigEntryServiceRouter.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .routes(IResolvable)
//  .routes(java.util.List<ConfigEntryServiceRouterRoutes>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.routes">routes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>></code> | routes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.meta"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#meta ConfigEntryServiceRouter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.routes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>>

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#routes ConfigEntryServiceRouter#routes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes">putRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes">resetRoutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutes` <a name="putRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes"></a>

```java
public void putRoutes(IResolvable OR java.util.List<ConfigEntryServiceRouterRoutes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId"></a>

```java
public void resetId()
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta"></a>

```java
public void resetMeta()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetRoutes` <a name="resetRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes"></a>

```java
public void resetRoutes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouter;

ConfigEntryServiceRouter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouter;

ConfigEntryServiceRouter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouter;

ConfigEntryServiceRouter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouter;

ConfigEntryServiceRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigEntryServiceRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigEntryServiceRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigEntryServiceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput">metaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput">routesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes"></a>

```java
public ConfigEntryServiceRouterRoutesList getRoutes();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `routesInput`<sup>Optional</sup> <a name="routesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput"></a>

```java
public java.lang.Object getRoutesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceRouterConfig <a name="ConfigEntryServiceRouterConfig" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterConfig;

ConfigEntryServiceRouterConfig.builder()
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
//  .id(java.lang.String)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .routes(IResolvable)
//  .routes(java.util.List<ConfigEntryServiceRouterRoutes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes">routes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>></code> | routes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#meta ConfigEntryServiceRouter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes"></a>

```java
public java.lang.Object getRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>>

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#routes ConfigEntryServiceRouter#routes}

---

### ConfigEntryServiceRouterRoutes <a name="ConfigEntryServiceRouterRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutes;

ConfigEntryServiceRouterRoutes.builder()
//  .destination(ConfigEntryServiceRouterRoutesDestination)
//  .match(ConfigEntryServiceRouterRoutesMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match">match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | match block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination"></a>

```java
public ConfigEntryServiceRouterRoutesDestination getDestination();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#destination ConfigEntryServiceRouter#destination}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match"></a>

```java
public ConfigEntryServiceRouterRoutesMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#match ConfigEntryServiceRouter#match}

---

### ConfigEntryServiceRouterRoutesDestination <a name="ConfigEntryServiceRouterRoutesDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesDestination;

ConfigEntryServiceRouterRoutesDestination.builder()
//  .idleTimeout(java.lang.String)
//  .namespace(java.lang.String)
//  .numRetries(java.lang.Number)
//  .partition(java.lang.String)
//  .prefixRewrite(java.lang.String)
//  .requestHeaders(ConfigEntryServiceRouterRoutesDestinationRequestHeaders)
//  .requestTimeout(java.lang.String)
//  .responseHeaders(ConfigEntryServiceRouterRoutesDestinationResponseHeaders)
//  .retryOn(java.util.List<java.lang.String>)
//  .retryOnConnectFailure(java.lang.Boolean)
//  .retryOnConnectFailure(IResolvable)
//  .retryOnStatusCodes(java.util.List<java.lang.Number>)
//  .service(java.lang.String)
//  .serviceSubset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | Specifies the total amount of time permitted for the request stream to be idle. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the Consul namespace to resolve the service from instead of the current namespace. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries">numRetries</a></code> | <code>java.lang.Number</code> | Specifies the number of times to retry the request when a retry condition occurs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the Consul admin partition to resolve the service from instead of the current partition. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite">prefixRewrite</a></code> | <code>java.lang.String</code> | Specifies rewrites to the HTTP request path before proxying it to its final destination. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn">retryOn</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of conditions for Consul to retry requests based on the response from an upstream service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure">retryOnConnectFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that connection failure errors that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes">retryOnStatusCodes</a></code> | <code>java.util.List<java.lang.Number></code> | Specifies a list of integers for HTTP response status codes that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service">service</a></code> | <code>java.lang.String</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

Specifies the total amount of time permitted for the request stream to be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#idle_timeout ConfigEntryServiceRouter#idle_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the Consul namespace to resolve the service from instead of the current namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `numRetries`<sup>Optional</sup> <a name="numRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries"></a>

```java
public java.lang.Number getNumRetries();
```

- *Type:* java.lang.Number

Specifies the number of times to retry the request when a retry condition occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#num_retries ConfigEntryServiceRouter#num_retries}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Specifies the Consul admin partition to resolve the service from instead of the current partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `prefixRewrite`<sup>Optional</sup> <a name="prefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite"></a>

```java
public java.lang.String getPrefixRewrite();
```

- *Type:* java.lang.String

Specifies rewrites to the HTTP request path before proxying it to its final destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#prefix_rewrite ConfigEntryServiceRouter#prefix_rewrite}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationRequestHeaders getRequestHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_headers ConfigEntryServiceRouter#request_headers}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_timeout ConfigEntryServiceRouter#request_timeout}

---

##### `responseHeaders`<sup>Optional</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationResponseHeaders getResponseHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#response_headers ConfigEntryServiceRouter#response_headers}

---

##### `retryOn`<sup>Optional</sup> <a name="retryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn"></a>

```java
public java.util.List<java.lang.String> getRetryOn();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of conditions for Consul to retry requests based on the response from an upstream service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on ConfigEntryServiceRouter#retry_on}

---

##### `retryOnConnectFailure`<sup>Optional</sup> <a name="retryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure"></a>

```java
public java.lang.Object getRetryOnConnectFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that connection failure errors that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_connect_failure ConfigEntryServiceRouter#retry_on_connect_failure}

---

##### `retryOnStatusCodes`<sup>Optional</sup> <a name="retryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes"></a>

```java
public java.util.List<java.lang.Number> getRetryOnStatusCodes();
```

- *Type:* java.util.List<java.lang.Number>

Specifies a list of integers for HTTP response status codes that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_status_codes ConfigEntryServiceRouter#retry_on_status_codes}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service ConfigEntryServiceRouter#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service_subset ConfigEntryServiceRouter#service_subset}

---

### ConfigEntryServiceRouterRoutesDestinationRequestHeaders <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesDestinationRequestHeaders;

ConfigEntryServiceRouterRoutesDestinationRequestHeaders.builder()
//  .add(java.util.Map<java.lang.String, java.lang.String>)
//  .remove(java.util.List<java.lang.String>)
//  .set(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Defines a set of key-value pairs to add to the request header or to replace existing header values with. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Defines a set of key-value pairs to add to the request header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesDestinationResponseHeaders <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesDestinationResponseHeaders;

ConfigEntryServiceRouterRoutesDestinationResponseHeaders.builder()
//  .add(java.util.Map<java.lang.String, java.lang.String>)
//  .remove(java.util.List<java.lang.String>)
//  .set(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Defines a set of key-value pairs to add to the response header or to replace existing header values with. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Defines a set of key-value pairs to add to the response header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesMatch <a name="ConfigEntryServiceRouterRoutesMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatch;

ConfigEntryServiceRouterRoutesMatch.builder()
//  .http(ConfigEntryServiceRouterRoutesMatchHttp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | http block. |

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttp getHttp();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#http ConfigEntryServiceRouter#http}

---

### ConfigEntryServiceRouterRoutesMatchHttp <a name="ConfigEntryServiceRouterRoutesMatchHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttp;

ConfigEntryServiceRouterRoutesMatchHttp.builder()
//  .header(IResolvable)
//  .header(java.util.List<ConfigEntryServiceRouterRoutesMatchHttpHeader>)
//  .methods(java.util.List<java.lang.String>)
//  .pathExact(java.lang.String)
//  .pathPrefix(java.lang.String)
//  .pathRegex(java.lang.String)
//  .queryParam(IResolvable)
//  .queryParam(java.util.List<ConfigEntryServiceRouterRoutesMatchHttpQueryParam>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | Specifies HTTP methods that the match applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact">pathExact</a></code> | <code>java.lang.String</code> | Specifies the exact path to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Specifies the path prefix to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex">pathRegex</a></code> | <code>java.lang.String</code> | Specifies a regular expression to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam">queryParam</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>></code> | query_param block. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#header ConfigEntryServiceRouter#header}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

Specifies HTTP methods that the match applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#methods ConfigEntryServiceRouter#methods}

---

##### `pathExact`<sup>Optional</sup> <a name="pathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact"></a>

```java
public java.lang.String getPathExact();
```

- *Type:* java.lang.String

Specifies the exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_exact ConfigEntryServiceRouter#path_exact}

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

Specifies the path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_prefix ConfigEntryServiceRouter#path_prefix}

---

##### `pathRegex`<sup>Optional</sup> <a name="pathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex"></a>

```java
public java.lang.String getPathRegex();
```

- *Type:* java.lang.String

Specifies a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_regex ConfigEntryServiceRouter#path_regex}

---

##### `queryParam`<sup>Optional</sup> <a name="queryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam"></a>

```java
public java.lang.Object getQueryParam();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>>

query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#query_param ConfigEntryServiceRouter#query_param}

---

### ConfigEntryServiceRouterRoutesMatchHttpHeader <a name="ConfigEntryServiceRouterRoutesMatchHttpHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttpHeader;

ConfigEntryServiceRouterRoutesMatchHttpHeader.builder()
//  .exact(java.lang.String)
//  .invert(java.lang.Boolean)
//  .invert(IResolvable)
//  .name(java.lang.String)
//  .prefix(java.lang.String)
//  .present(java.lang.Boolean)
//  .present(IResolvable)
//  .regex(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact">exact</a></code> | <code>java.lang.String</code> | Specifies that a request matches when the header with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that the logic for the HTTP header match should be inverted. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the HTTP header to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Specifies that a request matches when the header with the given name has this prefix. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present">present</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex">regex</a></code> | <code>java.lang.String</code> | Specifies that a request matches when the header with the given name matches this regular expression. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Specifies that a request matches when the header with the given name has this suffix. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Specifies that a request matches when the header with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that the logic for the HTTP header match should be inverted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#invert ConfigEntryServiceRouter#invert}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the HTTP header to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Specifies that a request matches when the header with the given name has this prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#prefix ConfigEntryServiceRouter#prefix}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present"></a>

```java
public java.lang.Object getPresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Specifies that a request matches when the header with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Specifies that a request matches when the header with the given name has this suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#suffix ConfigEntryServiceRouter#suffix}

---

### ConfigEntryServiceRouterRoutesMatchHttpQueryParam <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttpQueryParam;

ConfigEntryServiceRouterRoutesMatchHttpQueryParam.builder()
//  .exact(java.lang.String)
//  .name(java.lang.String)
//  .present(java.lang.Boolean)
//  .present(IResolvable)
//  .regex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact">exact</a></code> | <code>java.lang.String</code> | Specifies that a request matches when the query parameter with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the HTTP query parameter to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present">present</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex">regex</a></code> | <code>java.lang.String</code> | Specifies that a request matches when the query parameter with the given name matches this regular expression. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

Specifies that a request matches when the query parameter with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the HTTP query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present"></a>

```java
public java.lang.Object getPresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Specifies that a request matches when the query parameter with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceRouterRoutesDestinationOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesDestinationOutputReference;

new ConfigEntryServiceRouterRoutesDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders">putRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders">putResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries">resetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite">resetPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders">resetResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn">resetRetryOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure">resetRetryOnConnectFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes">resetRetryOnStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeaders` <a name="putRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders"></a>

```java
public void putRequestHeaders(ConfigEntryServiceRouterRoutesDestinationRequestHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---

##### `putResponseHeaders` <a name="putResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders"></a>

```java
public void putResponseHeaders(ConfigEntryServiceRouterRoutesDestinationResponseHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNumRetries` <a name="resetNumRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries"></a>

```java
public void resetNumRetries()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetPrefixRewrite` <a name="resetPrefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite"></a>

```java
public void resetPrefixRewrite()
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders"></a>

```java
public void resetRequestHeaders()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetResponseHeaders` <a name="resetResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders"></a>

```java
public void resetResponseHeaders()
```

##### `resetRetryOn` <a name="resetRetryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn"></a>

```java
public void resetRetryOn()
```

##### `resetRetryOnConnectFailure` <a name="resetRetryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure"></a>

```java
public void resetRetryOnConnectFailure()
```

##### `resetRetryOnStatusCodes` <a name="resetRetryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes"></a>

```java
public void resetRetryOnStatusCodes()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset"></a>

```java
public void resetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders">requestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders">responseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput">numRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput">prefixRewriteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput">responseHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput">retryOnConnectFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput">retryOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput">retryOnStatusCodesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries">numRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite">prefixRewrite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn">retryOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure">retryOnConnectFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes">retryOnStatusCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference getRequestHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a>

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference getResponseHeaders();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a>

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput"></a>

```java
public java.lang.String getIdleTimeoutInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `numRetriesInput`<sup>Optional</sup> <a name="numRetriesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput"></a>

```java
public java.lang.Number getNumRetriesInput();
```

- *Type:* java.lang.Number

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `prefixRewriteInput`<sup>Optional</sup> <a name="prefixRewriteInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput"></a>

```java
public java.lang.String getPrefixRewriteInput();
```

- *Type:* java.lang.String

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationRequestHeaders getRequestHeadersInput();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput"></a>

```java
public java.lang.String getRequestTimeoutInput();
```

- *Type:* java.lang.String

---

##### `responseHeadersInput`<sup>Optional</sup> <a name="responseHeadersInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationResponseHeaders getResponseHeadersInput();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---

##### `retryOnConnectFailureInput`<sup>Optional</sup> <a name="retryOnConnectFailureInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput"></a>

```java
public java.lang.Object getRetryOnConnectFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryOnInput`<sup>Optional</sup> <a name="retryOnInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput"></a>

```java
public java.util.List<java.lang.String> getRetryOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retryOnStatusCodesInput`<sup>Optional</sup> <a name="retryOnStatusCodesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput"></a>

```java
public java.util.List<java.lang.Number> getRetryOnStatusCodesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput"></a>

```java
public java.lang.String getServiceSubsetInput();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries"></a>

```java
public java.lang.Number getNumRetries();
```

- *Type:* java.lang.Number

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `prefixRewrite`<sup>Required</sup> <a name="prefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite"></a>

```java
public java.lang.String getPrefixRewrite();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

---

##### `retryOn`<sup>Required</sup> <a name="retryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn"></a>

```java
public java.util.List<java.lang.String> getRetryOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retryOnConnectFailure`<sup>Required</sup> <a name="retryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure"></a>

```java
public java.lang.Object getRetryOnConnectFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retryOnStatusCodes`<sup>Required</sup> <a name="retryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes"></a>

```java
public java.util.List<java.lang.Number> getRetryOnStatusCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue"></a>

```java
public ConfigEntryServiceRouterRoutesDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---


### ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference;

new ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd"></a>

```java
public void resetAdd()
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove"></a>

```java
public void resetRemove()
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet"></a>

```java
public void resetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput">addInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput">setInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput"></a>

```java
public java.util.List<java.lang.String> getRemoveInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSetInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationRequestHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---


### ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference;

new ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd"></a>

```java
public void resetAdd()
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove"></a>

```java
public void resetRemove()
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet"></a>

```java
public void resetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput">addInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput">removeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput">setInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput"></a>

```java
public java.util.List<java.lang.String> getRemoveInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSetInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationResponseHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---


### ConfigEntryServiceRouterRoutesList <a name="ConfigEntryServiceRouterRoutesList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesList;

new ConfigEntryServiceRouterRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get"></a>

```java
public ConfigEntryServiceRouterRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>>

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderList <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttpHeaderList;

new ConfigEntryServiceRouterRoutesMatchHttpHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>>

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference;

new ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent">resetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetInvert` <a name="resetInvert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert"></a>

```java
public void resetInvert()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetPresent` <a name="resetPresent" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent"></a>

```java
public void resetPresent()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput">invertInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput">presentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert">invert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present">present</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput"></a>

```java
public java.lang.Object getInvertInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `presentInput`<sup>Optional</sup> <a name="presentInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput"></a>

```java
public java.lang.Object getPresentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert"></a>

```java
public java.lang.Object getInvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present"></a>

```java
public java.lang.Object getPresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>

---


### ConfigEntryServiceRouterRoutesMatchHttpOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttpOutputReference;

new ConfigEntryServiceRouterRoutesMatchHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam">putQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact">resetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex">resetPathRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam">resetQueryParam</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<ConfigEntryServiceRouterRoutesMatchHttpHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>>

---

##### `putQueryParam` <a name="putQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam"></a>

```java
public void putQueryParam(IResolvable OR java.util.List<ConfigEntryServiceRouterRoutesMatchHttpQueryParam> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>>

---

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods"></a>

```java
public void resetMethods()
```

##### `resetPathExact` <a name="resetPathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact"></a>

```java
public void resetPathExact()
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix"></a>

```java
public void resetPathPrefix()
```

##### `resetPathRegex` <a name="resetPathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex"></a>

```java
public void resetPathRegex()
```

##### `resetQueryParam` <a name="resetQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam"></a>

```java
public void resetQueryParam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam">queryParam</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput">methodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput">pathExactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput">pathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput">pathRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput">queryParamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact">pathExact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex">pathRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttpHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a>

---

##### `queryParam`<sup>Required</sup> <a name="queryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttpQueryParamList getQueryParam();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>>

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput"></a>

```java
public java.util.List<java.lang.String> getMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathExactInput`<sup>Optional</sup> <a name="pathExactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput"></a>

```java
public java.lang.String getPathExactInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput"></a>

```java
public java.lang.String getPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `pathRegexInput`<sup>Optional</sup> <a name="pathRegexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput"></a>

```java
public java.lang.String getPathRegexInput();
```

- *Type:* java.lang.String

---

##### `queryParamInput`<sup>Optional</sup> <a name="queryParamInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput"></a>

```java
public java.lang.Object getQueryParamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>>

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathExact`<sup>Required</sup> <a name="pathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact"></a>

```java
public java.lang.String getPathExact();
```

- *Type:* java.lang.String

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

---

##### `pathRegex`<sup>Required</sup> <a name="pathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex"></a>

```java
public java.lang.String getPathRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamList <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList;

new ConfigEntryServiceRouterRoutesMatchHttpQueryParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>>

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference;

new ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent">resetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact"></a>

```java
public void resetExact()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPresent` <a name="resetPresent" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent"></a>

```java
public void resetPresent()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput">exactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput">presentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact">exact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present">present</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput"></a>

```java
public java.lang.String getExactInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `presentInput`<sup>Optional</sup> <a name="presentInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput"></a>

```java
public java.lang.Object getPresentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact"></a>

```java
public java.lang.String getExact();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present"></a>

```java
public java.lang.Object getPresent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>

---


### ConfigEntryServiceRouterRoutesMatchOutputReference <a name="ConfigEntryServiceRouterRoutesMatchOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesMatchOutputReference;

new ConfigEntryServiceRouterRoutesMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp">resetHttp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttp` <a name="putHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp"></a>

```java
public void putHttp(ConfigEntryServiceRouterRoutesMatchHttp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp"></a>

```java
public void resetHttp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttpOutputReference getHttp();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput"></a>

```java
public ConfigEntryServiceRouterRoutesMatchHttp getHttpInput();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue"></a>

```java
public ConfigEntryServiceRouterRoutesMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---


### ConfigEntryServiceRouterRoutesOutputReference <a name="ConfigEntryServiceRouterRoutesOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_router.ConfigEntryServiceRouterRoutesOutputReference;

new ConfigEntryServiceRouterRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination"></a>

```java
public void putDestination(ConfigEntryServiceRouterRoutesDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch"></a>

```java
public void putMatch(ConfigEntryServiceRouterRoutesMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch"></a>

```java
public void resetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination"></a>

```java
public ConfigEntryServiceRouterRoutesDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match"></a>

```java
public ConfigEntryServiceRouterRoutesMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput"></a>

```java
public ConfigEntryServiceRouterRoutesDestination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput"></a>

```java
public ConfigEntryServiceRouterRoutesMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>

---



