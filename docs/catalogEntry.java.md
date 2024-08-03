# `catalogEntry` Submodule <a name="`catalogEntry` Submodule" id="@cdktf/provider-consul.catalogEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogEntry <a name="CatalogEntry" id="@cdktf/provider-consul.catalogEntry.CatalogEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry consul_catalog_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntry;

CatalogEntry.Builder.create(Construct scope, java.lang.String id)
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
    .address(java.lang.String)
    .nodeAttribute(java.lang.String)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .service(IResolvable)
//  .service(java.util.List<CatalogEntryService>)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#address CatalogEntry#address}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.nodeAttribute">nodeAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#node CatalogEntry#node}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#datacenter CatalogEntry#datacenter}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#id CatalogEntry#id}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.service">service</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>></code> | service block. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#token CatalogEntry#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.address"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#address CatalogEntry#address}.

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.nodeAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#node CatalogEntry#node}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#datacenter CatalogEntry#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#id CatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.service"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#service CatalogEntry#service}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#token CatalogEntry#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putService` <a name="putService" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.putService"></a>

```java
public void putService(IResolvable OR java.util.List<CatalogEntryService> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.putService.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>>

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.resetId"></a>

```java
public void resetId()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.resetService"></a>

```java
public void resetService()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CatalogEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntry;

CatalogEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntry;

CatalogEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntry;

CatalogEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntry;

CatalogEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CatalogEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CatalogEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CatalogEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CatalogEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CatalogEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.service">service</a></code> | <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList">CatalogEntryServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.nodeAttributeInput">nodeAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.serviceInput">serviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.nodeAttribute">nodeAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.service"></a>

```java
public CatalogEntryServiceList getService();
```

- *Type:* <a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList">CatalogEntryServiceList</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nodeAttributeInput`<sup>Optional</sup> <a name="nodeAttributeInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.nodeAttributeInput"></a>

```java
public java.lang.String getNodeAttributeInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.serviceInput"></a>

```java
public java.lang.Object getServiceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.nodeAttribute"></a>

```java
public java.lang.String getNodeAttribute();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.catalogEntry.CatalogEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogEntryConfig <a name="CatalogEntryConfig" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntryConfig;

CatalogEntryConfig.builder()
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
    .address(java.lang.String)
    .nodeAttribute(java.lang.String)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .service(IResolvable)
//  .service(java.util.List<CatalogEntryService>)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#address CatalogEntry#address}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.nodeAttribute">nodeAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#node CatalogEntry#node}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#datacenter CatalogEntry#datacenter}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#id CatalogEntry#id}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.service">service</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>></code> | service block. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#token CatalogEntry#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#address CatalogEntry#address}.

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.nodeAttribute"></a>

```java
public java.lang.String getNodeAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#node CatalogEntry#node}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#datacenter CatalogEntry#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#id CatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.service"></a>

```java
public java.lang.Object getService();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#service CatalogEntry#service}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.catalogEntry.CatalogEntryConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#token CatalogEntry#token}.

---

### CatalogEntryService <a name="CatalogEntryService" id="@cdktf/provider-consul.catalogEntry.CatalogEntryService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.catalogEntry.CatalogEntryService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntryService;

CatalogEntryService.builder()
    .name(java.lang.String)
//  .address(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#name CatalogEntry#name}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#address CatalogEntry#address}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#id CatalogEntry#id}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#port CatalogEntry#port}. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#tags CatalogEntry#tags}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#name CatalogEntry#name}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#address CatalogEntry#address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#id CatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#port CatalogEntry#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-consul.catalogEntry.CatalogEntryService.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/catalog_entry#tags CatalogEntry#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogEntryServiceList <a name="CatalogEntryServiceList" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntryServiceList;

new CatalogEntryServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.get"></a>

```java
public CatalogEntryServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>>

---


### CatalogEntryServiceOutputReference <a name="CatalogEntryServiceOutputReference" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.catalog_entry.CatalogEntryServiceOutputReference;

new CatalogEntryServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.catalogEntry.CatalogEntryServiceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.catalogEntry.CatalogEntryService">CatalogEntryService</a>

---



