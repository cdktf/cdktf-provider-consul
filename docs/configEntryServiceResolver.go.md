# `configEntryServiceResolver` Submodule <a name="`configEntryServiceResolver` Submodule" id="@cdktf/provider-consul.configEntryServiceResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceResolver <a name="ConfigEntryServiceResolver" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver consul_config_entry_service_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolver(scope Construct, id *string, config ConfigEntryServiceResolverConfig) ConfigEntryServiceResolver
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig">ConfigEntryServiceResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig">ConfigEntryServiceResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover">PutFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets">PutSubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset">ResetDefaultSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets">ResetSubsets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFailover` <a name="PutFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover"></a>

```go
func PutFailover(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer"></a>

```go
func PutLoadBalancer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect"></a>

```go
func PutRedirect(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubsets` <a name="PutSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets"></a>

```go
func PutSubsets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetDefaultSubset` <a name="ResetDefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset"></a>

```go
func ResetDefaultSubset()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover"></a>

```go
func ResetFailover()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta"></a>

```go
func ResetMeta()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect"></a>

```go
func ResetRedirect()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetSubsets` <a name="ResetSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets"></a>

```go
func ResetSubsets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.ConfigEntryServiceResolver_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.ConfigEntryServiceResolver_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.ConfigEntryServiceResolver_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.ConfigEntryServiceResolver_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigEntryServiceResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigEntryServiceResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover">Failover</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets">Subsets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput">DefaultSubsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput">FailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput">MetaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput">RedirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput">SubsetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset">DefaultSubset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta">Meta</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover"></a>

```go
func Failover() ConfigEntryServiceResolverFailoverList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer"></a>

```go
func LoadBalancer() ConfigEntryServiceResolverLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect"></a>

```go
func Redirect() ConfigEntryServiceResolverRedirectList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a>

---

##### `Subsets`<sup>Required</sup> <a name="Subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets"></a>

```go
func Subsets() ConfigEntryServiceResolverSubsetsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a>

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *string
```

- *Type:* *string

---

##### `DefaultSubsetInput`<sup>Optional</sup> <a name="DefaultSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput"></a>

```go
func DefaultSubsetInput() *string
```

- *Type:* *string

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput"></a>

```go
func FailoverInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() interface{}
```

- *Type:* interface{}

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput"></a>

```go
func MetaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput"></a>

```go
func RedirectInput() interface{}
```

- *Type:* interface{}

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *string
```

- *Type:* *string

---

##### `SubsetsInput`<sup>Optional</sup> <a name="SubsetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput"></a>

```go
func SubsetsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout"></a>

```go
func ConnectTimeout() *string
```

- *Type:* *string

---

##### `DefaultSubset`<sup>Required</sup> <a name="DefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset"></a>

```go
func DefaultSubset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta"></a>

```go
func Meta() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout"></a>

```go
func RequestTimeout() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceResolverConfig <a name="ConfigEntryServiceResolverConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ConnectTimeout: *string,
	DefaultSubset: *string,
	Failover: interface{},
	Id: *string,
	LoadBalancer: interface{},
	Meta: *map[string]*string,
	Namespace: *string,
	Partition: *string,
	Redirect: interface{},
	RequestTimeout: *string,
	Subsets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name">Name</a></code> | <code>*string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | Specifies the timeout duration for establishing new network connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset">DefaultSubset</a></code> | <code>*string</code> | Specifies a defined subset of service instances to use when no explicit subset is requested. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover">Failover</a></code> | <code>interface{}</code> | failover block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer">LoadBalancer</a></code> | <code>interface{}</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta">Meta</a></code> | <code>*map[string]*string</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition">Partition</a></code> | <code>*string</code> | Specifies the admin partition that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect">Redirect</a></code> | <code>interface{}</code> | redirect block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | Specifies the timeout duration for receiving an HTTP response from this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets">Subsets</a></code> | <code>interface{}</code> | subsets block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout"></a>

```go
ConnectTimeout *string
```

- *Type:* *string

Specifies the timeout duration for establishing new network connections to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}

---

##### `DefaultSubset`<sup>Optional</sup> <a name="DefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset"></a>

```go
DefaultSubset *string
```

- *Type:* *string

Specifies a defined subset of service instances to use when no explicit subset is requested.

If this parameter is not specified, Consul uses the unnamed default subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover"></a>

```go
Failover interface{}
```

- *Type:* interface{}

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer"></a>

```go
LoadBalancer interface{}
```

- *Type:* interface{}

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta"></a>

```go
Meta *map[string]*string
```

- *Type:* *map[string]*string

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the admin partition that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect"></a>

```go
Redirect interface{}
```

- *Type:* interface{}

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout"></a>

```go
RequestTimeout *string
```

- *Type:* *string

Specifies the timeout duration for receiving an HTTP response from this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}

---

##### `Subsets`<sup>Optional</sup> <a name="Subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets"></a>

```go
Subsets interface{}
```

- *Type:* interface{}

subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}

---

### ConfigEntryServiceResolverFailover <a name="ConfigEntryServiceResolverFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverFailover {
	SubsetName: *string,
	Datacenters: *[]*string,
	Namespace: *string,
	SamenessGroup: *string,
	Service: *string,
	ServiceSubset: *string,
	Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName">SubsetName</a></code> | <code>*string</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters">Datacenters</a></code> | <code>*[]*string</code> | Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup">SamenessGroup</a></code> | <code>*string</code> | Specifies the sameness group at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service">Service</a></code> | <code>*string</code> | Specifies the name of the service to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets">Targets</a></code> | <code>interface{}</code> | targets block. |

---

##### `SubsetName`<sup>Required</sup> <a name="SubsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName"></a>

```go
SubsetName *string
```

- *Type:* *string

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#subset_name ConfigEntryServiceResolver#subset_name}

---

##### `Datacenters`<sup>Optional</sup> <a name="Datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters"></a>

```go
Datacenters *[]*string
```

- *Type:* *[]*string

Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario.

When Consul cannot establish a connection with the first datacenter in the list, it proceeds sequentially until establishing a connection with another datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#datacenters ConfigEntryServiceResolver#datacenters}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `SamenessGroup`<sup>Optional</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup"></a>

```go
SamenessGroup *string
```

- *Type:* *string

Specifies the sameness group at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service"></a>

```go
Service *string
```

- *Type:* *string

Specifies the name of the service to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset"></a>

```go
ServiceSubset *string
```

- *Type:* *string

Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#targets ConfigEntryServiceResolver#targets}

---

### ConfigEntryServiceResolverFailoverTargets <a name="ConfigEntryServiceResolverFailoverTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverFailoverTargets {
	Datacenter: *string,
	Namespace: *string,
	Partition: *string,
	Peer: *string,
	Service: *string,
	ServiceSubset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter">Datacenter</a></code> | <code>*string</code> | Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace to use for the failover target. If empty, the default namespace is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition">Partition</a></code> | <code>*string</code> | Specifies the admin partition within the same datacenter to use for the failover target. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer">Peer</a></code> | <code>*string</code> | Specifies the destination cluster peer to resolve the target service name from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service">Service</a></code> | <code>*string</code> | Specifies the service name to use for the failover target. If empty, the current service name is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | Specifies the named subset to use for the failover target. |

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace to use for the failover target. If empty, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the admin partition within the same datacenter to use for the failover target.

If empty, the default partition is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `Peer`<sup>Optional</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer"></a>

```go
Peer *string
```

- *Type:* *string

Specifies the destination cluster peer to resolve the target service name from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service"></a>

```go
Service *string
```

- *Type:* *string

Specifies the service name to use for the failover target. If empty, the current service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset"></a>

```go
ServiceSubset *string
```

- *Type:* *string

Specifies the named subset to use for the failover target.

If empty, the default subset for the requested service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverLoadBalancer <a name="ConfigEntryServiceResolverLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverLoadBalancer {
	HashPolicies: interface{},
	LeastRequestConfig: interface{},
	Policy: *string,
	RingHashConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies">HashPolicies</a></code> | <code>interface{}</code> | hash_policies block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig">LeastRequestConfig</a></code> | <code>interface{}</code> | least_request_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy">Policy</a></code> | <code>*string</code> | Specifies the type of load balancing policy for selecting a host. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig">RingHashConfig</a></code> | <code>interface{}</code> | ring_hash_config block. |

---

##### `HashPolicies`<sup>Optional</sup> <a name="HashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies"></a>

```go
HashPolicies interface{}
```

- *Type:* interface{}

hash_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#hash_policies ConfigEntryServiceResolver#hash_policies}

---

##### `LeastRequestConfig`<sup>Optional</sup> <a name="LeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig"></a>

```go
LeastRequestConfig interface{}
```

- *Type:* interface{}

least_request_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#least_request_config ConfigEntryServiceResolver#least_request_config}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Specifies the type of load balancing policy for selecting a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#policy ConfigEntryServiceResolver#policy}

---

##### `RingHashConfig`<sup>Optional</sup> <a name="RingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig"></a>

```go
RingHashConfig interface{}
```

- *Type:* interface{}

ring_hash_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#ring_hash_config ConfigEntryServiceResolver#ring_hash_config}

---

### ConfigEntryServiceResolverLoadBalancerHashPolicies <a name="ConfigEntryServiceResolverLoadBalancerHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverLoadBalancerHashPolicies {
	CookieConfig: interface{},
	Field: *string,
	FieldValue: *string,
	SourceIp: interface{},
	Terminal: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig">CookieConfig</a></code> | <code>interface{}</code> | cookie_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field">Field</a></code> | <code>*string</code> | Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue">FieldValue</a></code> | <code>*string</code> | Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp">SourceIp</a></code> | <code>interface{}</code> | Determines if the hash type should be source IP address. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal">Terminal</a></code> | <code>interface{}</code> | Determines if Consul should stop computing the hash when multiple hash policies are present. |

---

##### `CookieConfig`<sup>Optional</sup> <a name="CookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig"></a>

```go
CookieConfig interface{}
```

- *Type:* interface{}

cookie_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#cookie_config ConfigEntryServiceResolver#cookie_config}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field"></a>

```go
Field *string
```

- *Type:* *string

Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#field ConfigEntryServiceResolver#field}

---

##### `FieldValue`<sup>Optional</sup> <a name="FieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue"></a>

```go
FieldValue *string
```

- *Type:* *string

Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#field_value ConfigEntryServiceResolver#field_value}

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp"></a>

```go
SourceIp interface{}
```

- *Type:* interface{}

Determines if the hash type should be source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#source_ip ConfigEntryServiceResolver#source_ip}

---

##### `Terminal`<sup>Optional</sup> <a name="Terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal"></a>

```go
Terminal interface{}
```

- *Type:* interface{}

Determines if Consul should stop computing the hash when multiple hash policies are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#terminal ConfigEntryServiceResolver#terminal}

---

### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig {
	Path: *string,
	Session: interface{},
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path">Path</a></code> | <code>*string</code> | Specifies the path to set for the cookie. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session">Session</a></code> | <code>interface{}</code> | Directs Consul to generate a session cookie with no expiration. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Specifies the TTL for generated cookies. Cannot be specified for session cookies. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Specifies the path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#path ConfigEntryServiceResolver#path}

---

##### `Session`<sup>Optional</sup> <a name="Session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session"></a>

```go
Session interface{}
```

- *Type:* interface{}

Directs Consul to generate a session cookie with no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#session ConfigEntryServiceResolver#session}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Specifies the TTL for generated cookies. Cannot be specified for session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#ttl ConfigEntryServiceResolver#ttl}

---

### ConfigEntryServiceResolverLoadBalancerLeastRequestConfig <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig {
	ChoiceCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount">ChoiceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}. |

---

##### `ChoiceCount`<sup>Optional</sup> <a name="ChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount"></a>

```go
ChoiceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}.

---

### ConfigEntryServiceResolverLoadBalancerRingHashConfig <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig {
	MaximumRingSize: *f64,
	MinimumRingSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize">MaximumRingSize</a></code> | <code>*f64</code> | Determines the maximum number of entries in the hash ring. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | Determines the minimum number of entries in the hash ring. |

---

##### `MaximumRingSize`<sup>Optional</sup> <a name="MaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize"></a>

```go
MaximumRingSize *f64
```

- *Type:* *f64

Determines the maximum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#maximum_ring_size ConfigEntryServiceResolver#maximum_ring_size}

---

##### `MinimumRingSize`<sup>Optional</sup> <a name="MinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize"></a>

```go
MinimumRingSize *f64
```

- *Type:* *f64

Determines the minimum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#minimum_ring_size ConfigEntryServiceResolver#minimum_ring_size}

---

### ConfigEntryServiceResolverRedirect <a name="ConfigEntryServiceResolverRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverRedirect {
	Datacenter: *string,
	Namespace: *string,
	Partition: *string,
	Peer: *string,
	SamenessGroup: *string,
	Service: *string,
	ServiceSubset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter">Datacenter</a></code> | <code>*string</code> | Specifies the datacenter at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition">Partition</a></code> | <code>*string</code> | Specifies the admin partition at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer">Peer</a></code> | <code>*string</code> | Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup">SamenessGroup</a></code> | <code>*string</code> | Specifies the sameness group at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service">Service</a></code> | <code>*string</code> | Specifies the name of a service at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests. |

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Specifies the datacenter at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the admin partition at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `Peer`<sup>Optional</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer"></a>

```go
Peer *string
```

- *Type:* *string

Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `SamenessGroup`<sup>Optional</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup"></a>

```go
SamenessGroup *string
```

- *Type:* *string

Specifies the sameness group at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service"></a>

```go
Service *string
```

- *Type:* *string

Specifies the name of a service at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset"></a>

```go
ServiceSubset *string
```

- *Type:* *string

Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests.

If empty, the default subset is used. If specified, you must also specify at least one of the following in the same Redirect map: Service, Namespace, andDatacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverSubsets <a name="ConfigEntryServiceResolverSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

&configentryserviceresolver.ConfigEntryServiceResolverSubsets {
	Filter: *string,
	Name: *string,
	OnlyPassing: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter">Filter</a></code> | <code>*string</code> | Specifies an expression that filters the DNS elements of service instances that belong to the subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name">Name</a></code> | <code>*string</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing">OnlyPassing</a></code> | <code>interface{}</code> | Determines if instances that return a warning from a health check are allowed to resolve a request. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Specifies an expression that filters the DNS elements of service instances that belong to the subset.

If empty, all healthy instances of a service are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#filter ConfigEntryServiceResolver#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `OnlyPassing`<sup>Required</sup> <a name="OnlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing"></a>

```go
OnlyPassing interface{}
```

- *Type:* interface{}

Determines if instances that return a warning from a health check are allowed to resolve a request.

When set to false, instances with passing and warning states are considered healthy. When set to true, only instances with a passing health check state are considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_resolver#only_passing ConfigEntryServiceResolver#only_passing}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceResolverFailoverList <a name="ConfigEntryServiceResolverFailoverList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverFailoverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverFailoverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverFailoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverFailoverOutputReference <a name="ConfigEntryServiceResolverFailoverOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverFailoverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverFailoverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters">ResetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup">ResetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatacenters` <a name="ResetDatacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters"></a>

```go
func ResetDatacenters()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSamenessGroup` <a name="ResetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup"></a>

```go
func ResetSamenessGroup()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset"></a>

```go
func ResetServiceSubset()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets"></a>

```go
func ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput">DatacentersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput">SamenessGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput">SubsetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters">Datacenters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup">SamenessGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName">SubsetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets"></a>

```go
func Targets() ConfigEntryServiceResolverFailoverTargetsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a>

---

##### `DatacentersInput`<sup>Optional</sup> <a name="DatacentersInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput"></a>

```go
func DatacentersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SamenessGroupInput`<sup>Optional</sup> <a name="SamenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput"></a>

```go
func SamenessGroupInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput"></a>

```go
func ServiceSubsetInput() *string
```

- *Type:* *string

---

##### `SubsetNameInput`<sup>Optional</sup> <a name="SubsetNameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput"></a>

```go
func SubsetNameInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `Datacenters`<sup>Required</sup> <a name="Datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters"></a>

```go
func Datacenters() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SamenessGroup`<sup>Required</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup"></a>

```go
func SamenessGroup() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset"></a>

```go
func ServiceSubset() *string
```

- *Type:* *string

---

##### `SubsetName`<sup>Required</sup> <a name="SubsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName"></a>

```go
func SubsetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverFailoverTargetsList <a name="ConfigEntryServiceResolverFailoverTargetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverFailoverTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverFailoverTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverFailoverTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverFailoverTargetsOutputReference <a name="ConfigEntryServiceResolverFailoverTargetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverFailoverTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverFailoverTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer">ResetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetPeer` <a name="ResetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer"></a>

```go
func ResetPeer()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset"></a>

```go
func ResetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput">PeerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer">Peer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `PeerInput`<sup>Optional</sup> <a name="PeerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput"></a>

```go
func PeerInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput"></a>

```go
func ServiceSubsetInput() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `Peer`<sup>Required</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer"></a>

```go
func Peer() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset"></a>

```go
func ServiceSubset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession">ResetSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetSession` <a name="ResetSession" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession"></a>

```go
func ResetSession()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput">SessionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session">Session</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SessionInput`<sup>Optional</sup> <a name="SessionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput"></a>

```go
func SessionInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Session`<sup>Required</sup> <a name="Session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session"></a>

```go
func Session() interface{}
```

- *Type:* interface{}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerHashPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverLoadBalancerHashPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig">PutCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig">ResetCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue">ResetFieldValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal">ResetTerminal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookieConfig` <a name="PutCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig"></a>

```go
func PutCookieConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCookieConfig` <a name="ResetCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig"></a>

```go
func ResetCookieConfig()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField"></a>

```go
func ResetField()
```

##### `ResetFieldValue` <a name="ResetFieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue"></a>

```go
func ResetFieldValue()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp"></a>

```go
func ResetSourceIp()
```

##### `ResetTerminal` <a name="ResetTerminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal"></a>

```go
func ResetTerminal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig">CookieConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput">CookieConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput">FieldValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput">TerminalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue">FieldValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp">SourceIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal">Terminal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieConfig`<sup>Required</sup> <a name="CookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig"></a>

```go
func CookieConfig() ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a>

---

##### `CookieConfigInput`<sup>Optional</sup> <a name="CookieConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput"></a>

```go
func CookieConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `FieldValueInput`<sup>Optional</sup> <a name="FieldValueInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput"></a>

```go
func FieldValueInput() *string
```

- *Type:* *string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput"></a>

```go
func SourceIpInput() interface{}
```

- *Type:* interface{}

---

##### `TerminalInput`<sup>Optional</sup> <a name="TerminalInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput"></a>

```go
func TerminalInput() interface{}
```

- *Type:* interface{}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `FieldValue`<sup>Required</sup> <a name="FieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue"></a>

```go
func FieldValue() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp"></a>

```go
func SourceIp() interface{}
```

- *Type:* interface{}

---

##### `Terminal`<sup>Required</sup> <a name="Terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal"></a>

```go
func Terminal() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerLeastRequestConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount">ResetChoiceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChoiceCount` <a name="ResetChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount"></a>

```go
func ResetChoiceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput">ChoiceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount">ChoiceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChoiceCountInput`<sup>Optional</sup> <a name="ChoiceCountInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput"></a>

```go
func ChoiceCountInput() *f64
```

- *Type:* *f64

---

##### `ChoiceCount`<sup>Required</sup> <a name="ChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount"></a>

```go
func ChoiceCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerList <a name="ConfigEntryServiceResolverLoadBalancerList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverLoadBalancerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerOutputReference <a name="ConfigEntryServiceResolverLoadBalancerOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies">PutHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig">PutLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig">PutRingHashConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies">ResetHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig">ResetLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig">ResetRingHashConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHashPolicies` <a name="PutHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies"></a>

```go
func PutHashPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLeastRequestConfig` <a name="PutLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig"></a>

```go
func PutLeastRequestConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRingHashConfig` <a name="PutRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig"></a>

```go
func PutRingHashConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHashPolicies` <a name="ResetHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies"></a>

```go
func ResetHashPolicies()
```

##### `ResetLeastRequestConfig` <a name="ResetLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig"></a>

```go
func ResetLeastRequestConfig()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetRingHashConfig` <a name="ResetRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig"></a>

```go
func ResetRingHashConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies">HashPolicies</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig">LeastRequestConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig">RingHashConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput">HashPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput">LeastRequestConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput">RingHashConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HashPolicies`<sup>Required</sup> <a name="HashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies"></a>

```go
func HashPolicies() ConfigEntryServiceResolverLoadBalancerHashPoliciesList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a>

---

##### `LeastRequestConfig`<sup>Required</sup> <a name="LeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig"></a>

```go
func LeastRequestConfig() ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a>

---

##### `RingHashConfig`<sup>Required</sup> <a name="RingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig"></a>

```go
func RingHashConfig() ConfigEntryServiceResolverLoadBalancerRingHashConfigList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a>

---

##### `HashPoliciesInput`<sup>Optional</sup> <a name="HashPoliciesInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput"></a>

```go
func HashPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `LeastRequestConfigInput`<sup>Optional</sup> <a name="LeastRequestConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput"></a>

```go
func LeastRequestConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `RingHashConfigInput`<sup>Optional</sup> <a name="RingHashConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput"></a>

```go
func RingHashConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigList <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerRingHashConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverLoadBalancerRingHashConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize">ResetMaximumRingSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize">ResetMinimumRingSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumRingSize` <a name="ResetMaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize"></a>

```go
func ResetMaximumRingSize()
```

##### `ResetMinimumRingSize` <a name="ResetMinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize"></a>

```go
func ResetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput">MaximumRingSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput">MinimumRingSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize">MaximumRingSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumRingSizeInput`<sup>Optional</sup> <a name="MaximumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput"></a>

```go
func MaximumRingSizeInput() *f64
```

- *Type:* *f64

---

##### `MinimumRingSizeInput`<sup>Optional</sup> <a name="MinimumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput"></a>

```go
func MinimumRingSizeInput() *f64
```

- *Type:* *f64

---

##### `MaximumRingSize`<sup>Required</sup> <a name="MaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize"></a>

```go
func MaximumRingSize() *f64
```

- *Type:* *f64

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize"></a>

```go
func MinimumRingSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverRedirectList <a name="ConfigEntryServiceResolverRedirectList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverRedirectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverRedirectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverRedirectOutputReference <a name="ConfigEntryServiceResolverRedirectOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer">ResetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup">ResetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetPeer` <a name="ResetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer"></a>

```go
func ResetPeer()
```

##### `ResetSamenessGroup` <a name="ResetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup"></a>

```go
func ResetSamenessGroup()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset"></a>

```go
func ResetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput">PeerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput">SamenessGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer">Peer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup">SamenessGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `PeerInput`<sup>Optional</sup> <a name="PeerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput"></a>

```go
func PeerInput() *string
```

- *Type:* *string

---

##### `SamenessGroupInput`<sup>Optional</sup> <a name="SamenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput"></a>

```go
func SamenessGroupInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput"></a>

```go
func ServiceSubsetInput() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `Peer`<sup>Required</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer"></a>

```go
func Peer() *string
```

- *Type:* *string

---

##### `SamenessGroup`<sup>Required</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup"></a>

```go
func SamenessGroup() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset"></a>

```go
func ServiceSubset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverSubsetsList <a name="ConfigEntryServiceResolverSubsetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverSubsetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceResolverSubsetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceResolverSubsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceResolverSubsetsOutputReference <a name="ConfigEntryServiceResolverSubsetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceresolver"

configentryserviceresolver.NewConfigEntryServiceResolverSubsetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceResolverSubsetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput">OnlyPassingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing">OnlyPassing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnlyPassingInput`<sup>Optional</sup> <a name="OnlyPassingInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput"></a>

```go
func OnlyPassingInput() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnlyPassing`<sup>Required</sup> <a name="OnlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing"></a>

```go
func OnlyPassing() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



