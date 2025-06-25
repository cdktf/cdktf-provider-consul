# `certificateAuthority` Submodule <a name="`certificateAuthority` Submodule" id="@cdktf/provider-consul.certificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateAuthority <a name="CertificateAuthority" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority consul_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.certificate_authority.CertificateAuthority;

CertificateAuthority.Builder.create(Construct scope, java.lang.String id)
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
    .connectProvider(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .configJson(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.connectProvider">connectProvider</a></code> | <code>java.lang.String</code> | Specifies the CA provider type to use. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The raw configuration to use for the chosen provider. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.configJson">configJson</a></code> | <code>java.lang.String</code> | The raw configuration to use for the chosen provider. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#id CertificateAuthority#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectProvider`<sup>Required</sup> <a name="connectProvider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.connectProvider"></a>

- *Type:* java.lang.String

Specifies the CA provider type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#connect_provider CertificateAuthority#connect_provider}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.config"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The raw configuration to use for the chosen provider.

For more information on configuring the Connect CA providers, see [Provider Config](https://developer.hashicorp.com/consul/docs/connect/ca).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#config CertificateAuthority#config}

---

##### `configJson`<sup>Optional</sup> <a name="configJson" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.configJson"></a>

- *Type:* java.lang.String

The raw configuration to use for the chosen provider.

For more information on configuring the Connect CA providers, see [Provider Config](https://developer.hashicorp.com/consul/docs/connect/ca).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#config_json CertificateAuthority#config_json}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#id CertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetConfigJson">resetConfigJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetConfigJson` <a name="resetConfigJson" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetConfigJson"></a>

```java
public void resetConfigJson()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.certificate_authority.CertificateAuthority;

CertificateAuthority.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.certificate_authority.CertificateAuthority;

CertificateAuthority.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.certificate_authority.CertificateAuthority;

CertificateAuthority.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.certificate_authority.CertificateAuthority;

CertificateAuthority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CertificateAuthority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.configJsonInput">configJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.connectProviderInput">connectProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.configJson">configJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.connectProvider">connectProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configJsonInput`<sup>Optional</sup> <a name="configJsonInput" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.configJsonInput"></a>

```java
public java.lang.String getConfigJsonInput();
```

- *Type:* java.lang.String

---

##### `connectProviderInput`<sup>Optional</sup> <a name="connectProviderInput" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.connectProviderInput"></a>

```java
public java.lang.String getConnectProviderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configJson`<sup>Required</sup> <a name="configJson" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.configJson"></a>

```java
public java.lang.String getConfigJson();
```

- *Type:* java.lang.String

---

##### `connectProvider`<sup>Required</sup> <a name="connectProvider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.connectProvider"></a>

```java
public java.lang.String getConnectProvider();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthority.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateAuthorityConfig <a name="CertificateAuthorityConfig" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.certificate_authority.CertificateAuthorityConfig;

CertificateAuthorityConfig.builder()
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
    .connectProvider(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .configJson(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.connectProvider">connectProvider</a></code> | <code>java.lang.String</code> | Specifies the CA provider type to use. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The raw configuration to use for the chosen provider. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.configJson">configJson</a></code> | <code>java.lang.String</code> | The raw configuration to use for the chosen provider. |
| <code><a href="#@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#id CertificateAuthority#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectProvider`<sup>Required</sup> <a name="connectProvider" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.connectProvider"></a>

```java
public java.lang.String getConnectProvider();
```

- *Type:* java.lang.String

Specifies the CA provider type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#connect_provider CertificateAuthority#connect_provider}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The raw configuration to use for the chosen provider.

For more information on configuring the Connect CA providers, see [Provider Config](https://developer.hashicorp.com/consul/docs/connect/ca).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#config CertificateAuthority#config}

---

##### `configJson`<sup>Optional</sup> <a name="configJson" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.configJson"></a>

```java
public java.lang.String getConfigJson();
```

- *Type:* java.lang.String

The raw configuration to use for the chosen provider.

For more information on configuring the Connect CA providers, see [Provider Config](https://developer.hashicorp.com/consul/docs/connect/ca).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#config_json CertificateAuthority#config_json}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.certificateAuthority.CertificateAuthorityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/certificate_authority#id CertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



