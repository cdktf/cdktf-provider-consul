# `consul_acl_token`

Refer to the Terraform Registory for docs: [`consul_acl_token`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token).

# `aclToken` Submodule <a name="`aclToken` Submodule" id="@cdktf/provider-consul.aclToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclToken <a name="AclToken" id="@cdktf/provider-consul.aclToken.AclToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token consul_acl_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclToken;

AclToken.Builder.create(Construct scope, java.lang.String id)
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
//  .accessorId(java.lang.String)
//  .description(java.lang.String)
//  .expirationTime(java.lang.String)
//  .id(java.lang.String)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .namespace(java.lang.String)
//  .nodeIdentities(IResolvable)
//  .nodeIdentities(java.util.List<AclTokenNodeIdentities>)
//  .partition(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .roles(java.util.List<java.lang.String>)
//  .serviceIdentities(IResolvable)
//  .serviceIdentities(java.util.List<AclTokenServiceIdentities>)
//  .templatedPolicies(IResolvable)
//  .templatedPolicies(java.util.List<AclTokenTemplatedPolicies>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.accessorId">accessorId</a></code> | <code>java.lang.String</code> | The uuid of the token. If omitted, Consul will generate a random uuid. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the token. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | If set this represents the point after which a token should be considered revoked and is eligible for destruction. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#id AclToken#id}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The flag to set the token local to the current datacenter. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace to create the token within. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.nodeIdentities">nodeIdentities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>></code> | node_identities block. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | The partition the ACL token is associated with. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | The list of policies attached to the token. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | The list of roles attached to the token. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.serviceIdentities">serviceIdentities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>></code> | service_identities block. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.templatedPolicies">templatedPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>></code> | templated_policies block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessorId`<sup>Optional</sup> <a name="accessorId" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.accessorId"></a>

- *Type:* java.lang.String

The uuid of the token. If omitted, Consul will generate a random uuid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#accessor_id AclToken#accessor_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#description AclToken#description}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.expirationTime"></a>

- *Type:* java.lang.String

If set this represents the point after which a token should be considered revoked and is eligible for destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#expiration_time AclToken#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#id AclToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The flag to set the token local to the current datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#local AclToken#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace to create the token within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#namespace AclToken#namespace}

---

##### `nodeIdentities`<sup>Optional</sup> <a name="nodeIdentities" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.nodeIdentities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>>

node_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#node_identities AclToken#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

The partition the ACL token is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#partition AclToken#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

The list of policies attached to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#policies AclToken#policies}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.roles"></a>

- *Type:* java.util.List<java.lang.String>

The list of roles attached to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#roles AclToken#roles}

---

##### `serviceIdentities`<sup>Optional</sup> <a name="serviceIdentities" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.serviceIdentities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>>

service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#service_identities AclToken#service_identities}

---

##### `templatedPolicies`<sup>Optional</sup> <a name="templatedPolicies" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.templatedPolicies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>>

templated_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#templated_policies AclToken#templated_policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities">putNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities">putServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.putTemplatedPolicies">putTemplatedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetAccessorId">resetAccessorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetNodeIdentities">resetNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetServiceIdentities">resetServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetTemplatedPolicies">resetTemplatedPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.aclToken.AclToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclToken.AclToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.aclToken.AclToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.aclToken.AclToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.aclToken.AclToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.aclToken.AclToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclToken.AclToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.aclToken.AclToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclToken.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.aclToken.AclToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclToken.AclToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclToken.AclToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putNodeIdentities` <a name="putNodeIdentities" id="@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities"></a>

```java
public void putNodeIdentities(IResolvable OR java.util.List<AclTokenNodeIdentities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>>

---

##### `putServiceIdentities` <a name="putServiceIdentities" id="@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities"></a>

```java
public void putServiceIdentities(IResolvable OR java.util.List<AclTokenServiceIdentities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>>

---

##### `putTemplatedPolicies` <a name="putTemplatedPolicies" id="@cdktf/provider-consul.aclToken.AclToken.putTemplatedPolicies"></a>

```java
public void putTemplatedPolicies(IResolvable OR java.util.List<AclTokenTemplatedPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclToken.putTemplatedPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>>

---

##### `resetAccessorId` <a name="resetAccessorId" id="@cdktf/provider-consul.aclToken.AclToken.resetAccessorId"></a>

```java
public void resetAccessorId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-consul.aclToken.AclToken.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-consul.aclToken.AclToken.resetExpirationTime"></a>

```java
public void resetExpirationTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.aclToken.AclToken.resetId"></a>

```java
public void resetId()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-consul.aclToken.AclToken.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.aclToken.AclToken.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNodeIdentities` <a name="resetNodeIdentities" id="@cdktf/provider-consul.aclToken.AclToken.resetNodeIdentities"></a>

```java
public void resetNodeIdentities()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.aclToken.AclToken.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-consul.aclToken.AclToken.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-consul.aclToken.AclToken.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetServiceIdentities` <a name="resetServiceIdentities" id="@cdktf/provider-consul.aclToken.AclToken.resetServiceIdentities"></a>

```java
public void resetServiceIdentities()
```

##### `resetTemplatedPolicies` <a name="resetTemplatedPolicies" id="@cdktf/provider-consul.aclToken.AclToken.resetTemplatedPolicies"></a>

```java
public void resetTemplatedPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.aclToken.AclToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclToken;

AclToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclToken.AclToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclToken;

AclToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclToken;

AclToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.aclToken.AclToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclToken;

AclToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AclToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AclToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclToken.AclToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclToken.AclToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AclToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclToken.AclToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AclToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AclToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentities">nodeIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList">AclTokenNodeIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentities">serviceIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList">AclTokenServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.templatedPolicies">templatedPolicies</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList">AclTokenTemplatedPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.accessorIdInput">accessorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.expirationTimeInput">expirationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.localInput">localInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentitiesInput">nodeIdentitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentitiesInput">serviceIdentitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.templatedPoliciesInput">templatedPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.accessorId">accessorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclToken.AclToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.aclToken.AclToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.aclToken.AclToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclToken.AclToken.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclToken.AclToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclToken.AclToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclToken.AclToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclToken.AclToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclToken.AclToken.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `nodeIdentities`<sup>Required</sup> <a name="nodeIdentities" id="@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentities"></a>

```java
public AclTokenNodeIdentitiesList getNodeIdentities();
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList">AclTokenNodeIdentitiesList</a>

---

##### `serviceIdentities`<sup>Required</sup> <a name="serviceIdentities" id="@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentities"></a>

```java
public AclTokenServiceIdentitiesList getServiceIdentities();
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList">AclTokenServiceIdentitiesList</a>

---

##### `templatedPolicies`<sup>Required</sup> <a name="templatedPolicies" id="@cdktf/provider-consul.aclToken.AclToken.property.templatedPolicies"></a>

```java
public AclTokenTemplatedPoliciesList getTemplatedPolicies();
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList">AclTokenTemplatedPoliciesList</a>

---

##### `accessorIdInput`<sup>Optional</sup> <a name="accessorIdInput" id="@cdktf/provider-consul.aclToken.AclToken.property.accessorIdInput"></a>

```java
public java.lang.String getAccessorIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-consul.aclToken.AclToken.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-consul.aclToken.AclToken.property.expirationTimeInput"></a>

```java
public java.lang.String getExpirationTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.aclToken.AclToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-consul.aclToken.AclToken.property.localInput"></a>

```java
public java.lang.Object getLocalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.aclToken.AclToken.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nodeIdentitiesInput`<sup>Optional</sup> <a name="nodeIdentitiesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentitiesInput"></a>

```java
public java.lang.Object getNodeIdentitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.aclToken.AclToken.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceIdentitiesInput`<sup>Optional</sup> <a name="serviceIdentitiesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentitiesInput"></a>

```java
public java.lang.Object getServiceIdentitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>>

---

##### `templatedPoliciesInput`<sup>Optional</sup> <a name="templatedPoliciesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.templatedPoliciesInput"></a>

```java
public java.lang.Object getTemplatedPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>>

---

##### `accessorId`<sup>Required</sup> <a name="accessorId" id="@cdktf/provider-consul.aclToken.AclToken.property.accessorId"></a>

```java
public java.lang.String getAccessorId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclToken.AclToken.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-consul.aclToken.AclToken.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-consul.aclToken.AclToken.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclToken.AclToken.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclToken.AclToken.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-consul.aclToken.AclToken.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-consul.aclToken.AclToken.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclToken.AclToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AclTokenConfig <a name="AclTokenConfig" id="@cdktf/provider-consul.aclToken.AclTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenConfig;

AclTokenConfig.builder()
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
//  .accessorId(java.lang.String)
//  .description(java.lang.String)
//  .expirationTime(java.lang.String)
//  .id(java.lang.String)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .namespace(java.lang.String)
//  .nodeIdentities(IResolvable)
//  .nodeIdentities(java.util.List<AclTokenNodeIdentities>)
//  .partition(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .roles(java.util.List<java.lang.String>)
//  .serviceIdentities(IResolvable)
//  .serviceIdentities(java.util.List<AclTokenServiceIdentities>)
//  .templatedPolicies(IResolvable)
//  .templatedPolicies(java.util.List<AclTokenTemplatedPolicies>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.accessorId">accessorId</a></code> | <code>java.lang.String</code> | The uuid of the token. If omitted, Consul will generate a random uuid. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the token. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | If set this represents the point after which a token should be considered revoked and is eligible for destruction. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#id AclToken#id}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The flag to set the token local to the current datacenter. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace to create the token within. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.nodeIdentities">nodeIdentities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>></code> | node_identities block. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | The partition the ACL token is associated with. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | The list of policies attached to the token. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | The list of roles attached to the token. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.serviceIdentities">serviceIdentities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>></code> | service_identities block. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.templatedPolicies">templatedPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>></code> | templated_policies block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessorId`<sup>Optional</sup> <a name="accessorId" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.accessorId"></a>

```java
public java.lang.String getAccessorId();
```

- *Type:* java.lang.String

The uuid of the token. If omitted, Consul will generate a random uuid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#accessor_id AclToken#accessor_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#description AclToken#description}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

If set this represents the point after which a token should be considered revoked and is eligible for destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#expiration_time AclToken#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#id AclToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The flag to set the token local to the current datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#local AclToken#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace to create the token within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#namespace AclToken#namespace}

---

##### `nodeIdentities`<sup>Optional</sup> <a name="nodeIdentities" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.nodeIdentities"></a>

```java
public java.lang.Object getNodeIdentities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>>

node_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#node_identities AclToken#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

The partition the ACL token is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#partition AclToken#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

The list of policies attached to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#policies AclToken#policies}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

The list of roles attached to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#roles AclToken#roles}

---

##### `serviceIdentities`<sup>Optional</sup> <a name="serviceIdentities" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.serviceIdentities"></a>

```java
public java.lang.Object getServiceIdentities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>>

service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#service_identities AclToken#service_identities}

---

##### `templatedPolicies`<sup>Optional</sup> <a name="templatedPolicies" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.templatedPolicies"></a>

```java
public java.lang.Object getTemplatedPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>>

templated_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#templated_policies AclToken#templated_policies}

---

### AclTokenNodeIdentities <a name="AclTokenNodeIdentities" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenNodeIdentities;

AclTokenNodeIdentities.builder()
    .datacenter(java.lang.String)
    .nodeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | The datacenter of the node. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | The name of the node. |

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

The datacenter of the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#datacenter AclToken#datacenter}

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

The name of the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#node_name AclToken#node_name}

---

### AclTokenServiceIdentities <a name="AclTokenServiceIdentities" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenServiceIdentities;

AclTokenServiceIdentities.builder()
    .serviceName(java.lang.String)
//  .datacenters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the service. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the datacenters the effective policy is valid within. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#service_name AclToken#service_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

Specifies the datacenters the effective policy is valid within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#datacenters AclToken#datacenters}

---

### AclTokenTemplatedPolicies <a name="AclTokenTemplatedPolicies" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenTemplatedPolicies;

AclTokenTemplatedPolicies.builder()
    .templateName(java.lang.String)
//  .datacenters(java.util.List<java.lang.String>)
//  .templateVariables(AclTokenTemplatedPoliciesTemplateVariables)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies.property.templateName">templateName</a></code> | <code>java.lang.String</code> | The name of the templated policies. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the datacenters the effective policy is valid within. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies.property.templateVariables">templateVariables</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables">AclTokenTemplatedPoliciesTemplateVariables</a></code> | template_variables block. |

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

The name of the templated policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#template_name AclToken#template_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

Specifies the datacenters the effective policy is valid within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#datacenters AclToken#datacenters}

---

##### `templateVariables`<sup>Optional</sup> <a name="templateVariables" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies.property.templateVariables"></a>

```java
public AclTokenTemplatedPoliciesTemplateVariables getTemplateVariables();
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables">AclTokenTemplatedPoliciesTemplateVariables</a>

template_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#template_variables AclToken#template_variables}

---

### AclTokenTemplatedPoliciesTemplateVariables <a name="AclTokenTemplatedPoliciesTemplateVariables" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenTemplatedPoliciesTemplateVariables;

AclTokenTemplatedPoliciesTemplateVariables.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables.property.name">name</a></code> | <code>java.lang.String</code> | The name of node, workload identity or service. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of node, workload identity or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token#name AclToken#name}

---

## Classes <a name="Classes" id="Classes"></a>

### AclTokenNodeIdentitiesList <a name="AclTokenNodeIdentitiesList" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenNodeIdentitiesList;

new AclTokenNodeIdentitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get"></a>

```java
public AclTokenNodeIdentitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>>

---


### AclTokenNodeIdentitiesOutputReference <a name="AclTokenNodeIdentitiesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenNodeIdentitiesOutputReference;

new AclTokenNodeIdentitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeNameInput"></a>

```java
public java.lang.String getNodeNameInput();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>

---


### AclTokenServiceIdentitiesList <a name="AclTokenServiceIdentitiesList" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenServiceIdentitiesList;

new AclTokenServiceIdentitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get"></a>

```java
public AclTokenServiceIdentitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>>

---


### AclTokenServiceIdentitiesOutputReference <a name="AclTokenServiceIdentitiesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenServiceIdentitiesOutputReference;

new AclTokenServiceIdentitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resetDatacenters"></a>

```java
public void resetDatacenters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacentersInput"></a>

```java
public java.util.List<java.lang.String> getDatacentersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>

---


### AclTokenTemplatedPoliciesList <a name="AclTokenTemplatedPoliciesList" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenTemplatedPoliciesList;

new AclTokenTemplatedPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.get"></a>

```java
public AclTokenTemplatedPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>>

---


### AclTokenTemplatedPoliciesOutputReference <a name="AclTokenTemplatedPoliciesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenTemplatedPoliciesOutputReference;

new AclTokenTemplatedPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.putTemplateVariables">putTemplateVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.resetTemplateVariables">resetTemplateVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTemplateVariables` <a name="putTemplateVariables" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.putTemplateVariables"></a>

```java
public void putTemplateVariables(AclTokenTemplatedPoliciesTemplateVariables value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.putTemplateVariables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables">AclTokenTemplatedPoliciesTemplateVariables</a>

---

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.resetDatacenters"></a>

```java
public void resetDatacenters()
```

##### `resetTemplateVariables` <a name="resetTemplateVariables" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.resetTemplateVariables"></a>

```java
public void resetTemplateVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateVariables">templateVariables</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference">AclTokenTemplatedPoliciesTemplateVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateVariablesInput">templateVariablesInput</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables">AclTokenTemplatedPoliciesTemplateVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `templateVariables`<sup>Required</sup> <a name="templateVariables" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateVariables"></a>

```java
public AclTokenTemplatedPoliciesTemplateVariablesOutputReference getTemplateVariables();
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference">AclTokenTemplatedPoliciesTemplateVariablesOutputReference</a>

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.datacentersInput"></a>

```java
public java.util.List<java.lang.String> getDatacentersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `templateVariablesInput`<sup>Optional</sup> <a name="templateVariablesInput" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateVariablesInput"></a>

```java
public AclTokenTemplatedPoliciesTemplateVariables getTemplateVariablesInput();
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables">AclTokenTemplatedPoliciesTemplateVariables</a>

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPolicies">AclTokenTemplatedPolicies</a>

---


### AclTokenTemplatedPoliciesTemplateVariablesOutputReference <a name="AclTokenTemplatedPoliciesTemplateVariablesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.acl_token.AclTokenTemplatedPoliciesTemplateVariablesOutputReference;

new AclTokenTemplatedPoliciesTemplateVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables">AclTokenTemplatedPoliciesTemplateVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariablesOutputReference.property.internalValue"></a>

```java
public AclTokenTemplatedPoliciesTemplateVariables getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenTemplatedPoliciesTemplateVariables">AclTokenTemplatedPoliciesTemplateVariables</a>

---



