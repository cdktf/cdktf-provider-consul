# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-consul.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method consul_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethod;

AclAuthMethod.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .configJson(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .maxTokenTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .namespaceRule(IResolvable)
//  .namespaceRule(java.util.List<AclAuthMethodNamespaceRule>)
//  .partition(java.lang.String)
//  .tokenLocality(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.configJson">configJson</a></code> | <code>java.lang.String</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free form human readable description of the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | An optional name to use instead of the name attribute when displaying information about this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.String</code> | The maximum life of any token created by this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespaceRule">namespaceRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>></code> | namespace_rule block. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | The partition the ACL auth method is associated with. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenLocality">tokenLocality</a></code> | <code>java.lang.String</code> | The kind of token that this auth method produces. This can be either 'local' or 'global'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `configJson`<sup>Optional</sup> <a name="configJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.configJson"></a>

- *Type:* java.lang.String

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config_json AclAuthMethod#config_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free form human readable description of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#description AclAuthMethod#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

An optional name to use instead of the name attribute when displaying information about this auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#display_name AclAuthMethod#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTokenTtl`<sup>Optional</sup> <a name="maxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.maxTokenTtl"></a>

- *Type:* java.lang.String

The maximum life of any token created by this auth method.

**This attribute is required and must be set to a nonzero for the OIDC auth method.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace in which to create the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace AclAuthMethod#namespace}

---

##### `namespaceRule`<sup>Optional</sup> <a name="namespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespaceRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>>

namespace_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace_rule AclAuthMethod#namespace_rule}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

The partition the ACL auth method is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#partition AclAuthMethod#partition}

---

##### `tokenLocality`<sup>Optional</sup> <a name="tokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenLocality"></a>

- *Type:* java.lang.String

The kind of token that this auth method produces. This can be either 'local' or 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule">putNamespaceRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson">resetConfigJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl">resetMaxTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule">resetNamespaceRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality">resetTokenLocality</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNamespaceRule` <a name="putNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule"></a>

```java
public void putNamespaceRule(IResolvable OR java.util.List<AclAuthMethodNamespaceRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetConfigJson` <a name="resetConfigJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson"></a>

```java
public void resetConfigJson()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId"></a>

```java
public void resetId()
```

##### `resetMaxTokenTtl` <a name="resetMaxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl"></a>

```java
public void resetMaxTokenTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNamespaceRule` <a name="resetNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule"></a>

```java
public void resetNamespaceRule()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetTokenLocality` <a name="resetTokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality"></a>

```java
public void resetTokenLocality()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethod;

AclAuthMethod.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethod;

AclAuthMethod.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethod;

AclAuthMethod.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethod;

AclAuthMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AclAuthMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule">namespaceRule</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput">configJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">maxTokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput">namespaceRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">tokenLocalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson">configJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality">tokenLocality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespaceRule`<sup>Required</sup> <a name="namespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule"></a>

```java
public AclAuthMethodNamespaceRuleList getNamespaceRule();
```

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configJsonInput`<sup>Optional</sup> <a name="configJsonInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput"></a>

```java
public java.lang.String getConfigJsonInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxTokenTtlInput`<sup>Optional</sup> <a name="maxTokenTtlInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```java
public java.lang.String getMaxTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespaceRuleInput`<sup>Optional</sup> <a name="namespaceRuleInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput"></a>

```java
public java.lang.Object getNamespaceRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `tokenLocalityInput`<sup>Optional</sup> <a name="tokenLocalityInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```java
public java.lang.String getTokenLocalityInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configJson`<sup>Required</sup> <a name="configJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson"></a>

```java
public java.lang.String getConfigJson();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```java
public java.lang.String getMaxTokenTtl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `tokenLocality`<sup>Required</sup> <a name="tokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```java
public java.lang.String getTokenLocality();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethodConfig;

AclAuthMethodConfig.builder()
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
    .type(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .configJson(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .maxTokenTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .namespaceRule(IResolvable)
//  .namespaceRule(java.util.List<AclAuthMethodNamespaceRule>)
//  .partition(java.lang.String)
//  .tokenLocality(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson">configJson</a></code> | <code>java.lang.String</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free form human readable description of the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | An optional name to use instead of the name attribute when displaying information about this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.String</code> | The maximum life of any token created by this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule">namespaceRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>></code> | namespace_rule block. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | The partition the ACL auth method is associated with. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">tokenLocality</a></code> | <code>java.lang.String</code> | The kind of token that this auth method produces. This can be either 'local' or 'global'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `configJson`<sup>Optional</sup> <a name="configJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson"></a>

```java
public java.lang.String getConfigJson();
```

- *Type:* java.lang.String

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config_json AclAuthMethod#config_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free form human readable description of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#description AclAuthMethod#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

An optional name to use instead of the name attribute when displaying information about this auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#display_name AclAuthMethod#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTokenTtl`<sup>Optional</sup> <a name="maxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```java
public java.lang.String getMaxTokenTtl();
```

- *Type:* java.lang.String

The maximum life of any token created by this auth method.

**This attribute is required and must be set to a nonzero for the OIDC auth method.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace in which to create the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace AclAuthMethod#namespace}

---

##### `namespaceRule`<sup>Optional</sup> <a name="namespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule"></a>

```java
public java.lang.Object getNamespaceRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>>

namespace_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace_rule AclAuthMethod#namespace_rule}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

The partition the ACL auth method is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#partition AclAuthMethod#partition}

---

##### `tokenLocality`<sup>Optional</sup> <a name="tokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```java
public java.lang.String getTokenLocality();
```

- *Type:* java.lang.String

The kind of token that this auth method produces. This can be either 'local' or 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

### AclAuthMethodNamespaceRule <a name="AclAuthMethodNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethodNamespaceRule;

AclAuthMethodNamespaceRule.builder()
    .bindNamespace(java.lang.String)
//  .selector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace">bindNamespace</a></code> | <code>java.lang.String</code> | If the namespace rule's `selector` matches then this is used to control the namespace where the token is created. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector">selector</a></code> | <code>java.lang.String</code> | Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation. |

---

##### `bindNamespace`<sup>Required</sup> <a name="bindNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace"></a>

```java
public java.lang.String getBindNamespace();
```

- *Type:* java.lang.String

If the namespace rule's `selector` matches then this is used to control the namespace where the token is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#bind_namespace AclAuthMethod#bind_namespace}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#selector AclAuthMethod#selector}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodNamespaceRuleList <a name="AclAuthMethodNamespaceRuleList" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethodNamespaceRuleList;

new AclAuthMethodNamespaceRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get"></a>

```java
public AclAuthMethodNamespaceRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>>

---


### AclAuthMethodNamespaceRuleOutputReference <a name="AclAuthMethodNamespaceRuleOutputReference" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_auth_method.AclAuthMethodNamespaceRuleOutputReference;

new AclAuthMethodNamespaceRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector"></a>

```java
public void resetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput">bindNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace">bindNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bindNamespaceInput`<sup>Optional</sup> <a name="bindNamespaceInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput"></a>

```java
public java.lang.String getBindNamespaceInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `bindNamespace`<sup>Required</sup> <a name="bindNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace"></a>

```java
public java.lang.String getBindNamespace();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a> OR com.hashicorp.cdktf.IResolvable

---



