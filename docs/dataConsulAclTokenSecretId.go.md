# `data_consul_acl_token_secret_id`

Refer to the Terraform Registory for docs: [`data_consul_acl_token_secret_id`](https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id).

# `dataConsulAclTokenSecretId` Submodule <a name="`dataConsulAclTokenSecretId` Submodule" id="@cdktf/provider-consul.dataConsulAclTokenSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAclTokenSecretId <a name="DataConsulAclTokenSecretId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id consul_acl_token_secret_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulacltokensecretid"

dataconsulacltokensecretid.NewDataConsulAclTokenSecretId(scope Construct, id *string, config DataConsulAclTokenSecretIdConfig) DataConsulAclTokenSecretId
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig">DataConsulAclTokenSecretIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig">DataConsulAclTokenSecretIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPgpKey">ResetPgpKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetPgpKey` <a name="ResetPgpKey" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.resetPgpKey"></a>

```go
func ResetPgpKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulacltokensecretid"

dataconsulacltokensecretid.DataConsulAclTokenSecretId_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulacltokensecretid"

dataconsulacltokensecretid.DataConsulAclTokenSecretId_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulacltokensecretid"

dataconsulacltokensecretid.DataConsulAclTokenSecretId_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.encryptedSecretId">EncryptedSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorIdInput">AccessorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKeyInput">PgpKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorId">AccessorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKey">PgpKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EncryptedSecretId`<sup>Required</sup> <a name="EncryptedSecretId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.encryptedSecretId"></a>

```go
func EncryptedSecretId() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `AccessorIdInput`<sup>Optional</sup> <a name="AccessorIdInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorIdInput"></a>

```go
func AccessorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `PgpKeyInput`<sup>Optional</sup> <a name="PgpKeyInput" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKeyInput"></a>

```go
func PgpKeyInput() *string
```

- *Type:* *string

---

##### `AccessorId`<sup>Required</sup> <a name="AccessorId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.accessorId"></a>

```go
func AccessorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `PgpKey`<sup>Required</sup> <a name="PgpKey" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.pgpKey"></a>

```go
func PgpKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretId.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAclTokenSecretIdConfig <a name="DataConsulAclTokenSecretIdConfig" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulacltokensecretid"

&dataconsulacltokensecretid.DataConsulAclTokenSecretIdConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessorId: *string,
	Id: *string,
	Namespace: *string,
	Partition: *string,
	PgpKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.accessorId">AccessorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#accessor_id DataConsulAclTokenSecretId#accessor_id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#id DataConsulAclTokenSecretId#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#namespace DataConsulAclTokenSecretId#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.partition">Partition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#partition DataConsulAclTokenSecretId#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.pgpKey">PgpKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#pgp_key DataConsulAclTokenSecretId#pgp_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessorId`<sup>Required</sup> <a name="AccessorId" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.accessorId"></a>

```go
AccessorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#accessor_id DataConsulAclTokenSecretId#accessor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#id DataConsulAclTokenSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#namespace DataConsulAclTokenSecretId#namespace}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#partition DataConsulAclTokenSecretId#partition}.

---

##### `PgpKey`<sup>Optional</sup> <a name="PgpKey" id="@cdktf/provider-consul.dataConsulAclTokenSecretId.DataConsulAclTokenSecretIdConfig.property.pgpKey"></a>

```go
PgpKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/acl_token_secret_id#pgp_key DataConsulAclTokenSecretId#pgp_key}.

---



